import { useState, useEffect } from 'react';
import { useWeb3 } from '@/contexts/Web3Context';
import { Button } from '@/components/ui/button';
import { Wallet, Plus, Loader2 } from 'lucide-react';
import CampaignList from '@/components/crowdfund/CampaignList';
import CreateCampaignDialog from '@/components/crowdfund/CreateCampaignDialog';
import { Campaign } from '@/lib/contract';
import { useToast } from '@/hooks/use-toast';

const Crowdfund = () => {
  const { account, contract, connectWallet, isConnecting } = useWeb3();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(false);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const { toast } = useToast();

  const loadCampaigns = async () => {
    if (!contract) return;
    
    try {
      setLoading(true);
      const campaignCount = await contract.campaignCount();
      const campaignPromises = [];
      
      for (let i = 1; i <= Number(campaignCount); i++) {
        campaignPromises.push(contract.getCampaign(i));
      }
      
      const campaignData = await Promise.all(campaignPromises);
      
      const formattedCampaigns: Campaign[] = campaignData.map((data, index) => ({
        id: index + 1,
        owner: data[0],
        goal: data[1],
        deadline: data[2],
        raised: data[3],
        active: data[4],
        title: data[5],
      }));
      
      setCampaigns(formattedCampaigns);
    } catch (error: any) {
      console.error("Error loading campaigns:", error);
      toast({
        title: "Error Loading Campaigns",
        description: error.message || "Failed to load campaigns",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (contract) {
      loadCampaigns();
    }
  }, [contract]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gradient">BlockFund</h1>
            <p className="text-sm text-muted-foreground">Decentralized Crowdfunding</p>
          </div>
          
          <div className="flex gap-3">
            {account ? (
              <>
                <Button
                  onClick={() => setCreateDialogOpen(true)}
                  className="gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Create Campaign
                </Button>
                <Button variant="outline" className="gap-2">
                  <Wallet className="h-4 w-4" />
                  {account.slice(0, 6)}...{account.slice(-4)}
                </Button>
              </>
            ) : (
              <Button
                onClick={connectWallet}
                disabled={isConnecting}
                className="gap-2"
              >
                {isConnecting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Wallet className="h-4 w-4" />
                )}
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {!account ? (
          <div className="text-center py-20">
            <Wallet className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-2">Connect Your Wallet</h2>
            <p className="text-muted-foreground mb-6">
              Connect your wallet to view and create campaigns
            </p>
            <Button onClick={connectWallet} size="lg" className="gap-2">
              <Wallet className="h-5 w-5" />
              Connect Wallet
            </Button>
          </div>
        ) : loading ? (
          <div className="text-center py-20">
            <Loader2 className="h-12 w-12 mx-auto animate-spin text-primary mb-4" />
            <p className="text-muted-foreground">Loading campaigns...</p>
          </div>
        ) : (
          <CampaignList campaigns={campaigns} onRefresh={loadCampaigns} />
        )}
      </main>

      <CreateCampaignDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onSuccess={loadCampaigns}
      />
    </div>
  );
};

export default Crowdfund;
