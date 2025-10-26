import { Campaign } from '@/lib/contract';
import CampaignCard from './CampaignCard';
import { AlertCircle } from 'lucide-react';

interface CampaignListProps {
  campaigns: Campaign[];
  onRefresh: () => void;
}

const CampaignList = ({ campaigns, onRefresh }: CampaignListProps) => {
  const activeCampaigns = campaigns.filter(c => c.active);

  if (campaigns.length === 0) {
    return (
      <div className="text-center py-20">
        <AlertCircle className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
        <h2 className="text-2xl font-bold mb-2">No Campaigns Yet</h2>
        <p className="text-muted-foreground">
          Be the first to create a campaign!
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          Active Campaigns
        </h2>
        <p className="text-muted-foreground">
          {activeCampaigns.length} active campaign{activeCampaigns.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <CampaignCard
            key={campaign.id}
            campaign={campaign}
            onSuccess={onRefresh}
          />
        ))}
      </div>
    </div>
  );
};

export default CampaignList;
