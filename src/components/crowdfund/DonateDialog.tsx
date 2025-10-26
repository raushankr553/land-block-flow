import { useState } from 'react';
import { useWeb3 } from '@/contexts/Web3Context';
import { Campaign } from '@/lib/contract';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { parseEther, formatEther } from 'ethers';
import { useToast } from '@/hooks/use-toast';

interface DonateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  campaign: Campaign;
  onSuccess: () => void;
}

const DonateDialog = ({ open, onOpenChange, campaign, onSuccess }: DonateDialogProps) => {
  const { contract } = useWeb3();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState('');

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contract || !amount) return;

    try {
      setLoading(true);
      
      const tx = await contract.donate(campaign.id, {
        value: parseEther(amount)
      });

      toast({
        title: "Transaction Submitted",
        description: "Processing your donation...",
      });

      await tx.wait();

      toast({
        title: "Donation Successful!",
        description: `You donated ${amount} ETH to ${campaign.title}`,
      });

      setAmount('');
      onOpenChange(false);
      onSuccess();
    } catch (error: any) {
      console.error("Error donating:", error);
      toast({
        title: "Transaction Failed",
        description: error.message || "Failed to donate",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Donate to Campaign</DialogTitle>
          <DialogDescription>
            {campaign.title}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="p-4 bg-muted/50 rounded-lg space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Current Progress</span>
              <span className="font-semibold">
                {formatEther(campaign.raised)} / {formatEther(campaign.goal)} ETH
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Remaining</span>
              <span className="font-semibold">
                {formatEther(campaign.goal - campaign.raised)} ETH
              </span>
            </div>
          </div>

          <form onSubmit={handleDonate} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Donation Amount (ETH)</Label>
              <Input
                id="amount"
                type="number"
                step="0.001"
                placeholder="0.1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Donate Now
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonateDialog;
