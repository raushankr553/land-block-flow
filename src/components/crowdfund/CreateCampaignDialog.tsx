import { useState } from 'react';
import { useWeb3 } from '@/contexts/Web3Context';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { parseEther } from 'ethers';
import { useToast } from '@/hooks/use-toast';

interface CreateCampaignDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

const CreateCampaignDialog = ({ open, onOpenChange, onSuccess }: CreateCampaignDialogProps) => {
  const { contract } = useWeb3();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    goal: '',
    duration: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contract) return;

    try {
      setLoading(true);
      
      const tx = await contract.createCampaign(
        formData.title,
        parseEther(formData.goal),
        parseInt(formData.duration)
      );

      toast({
        title: "Transaction Submitted",
        description: "Creating campaign...",
      });

      await tx.wait();

      toast({
        title: "Campaign Created!",
        description: "Your campaign has been created successfully",
      });

      setFormData({ title: '', goal: '', duration: '' });
      onOpenChange(false);
      onSuccess();
    } catch (error: any) {
      console.error("Error creating campaign:", error);
      toast({
        title: "Transaction Failed",
        description: error.message || "Failed to create campaign",
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
          <DialogTitle>Create New Campaign</DialogTitle>
          <DialogDescription>
            Launch your crowdfunding campaign on the blockchain
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Campaign Title</Label>
            <Input
              id="title"
              placeholder="My Awesome Project"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="goal">Funding Goal (ETH)</Label>
            <Input
              id="goal"
              type="number"
              step="0.01"
              placeholder="10"
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duration (Days)</Label>
            <Input
              id="duration"
              type="number"
              placeholder="30"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              required
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Campaign
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCampaignDialog;
