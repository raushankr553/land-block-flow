import { useState } from 'react';
import { Campaign } from '@/lib/contract';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Calendar, Target, TrendingUp, Clock } from 'lucide-react';
import { formatEther } from 'ethers';
import DonateDialog from './DonateDialog';

interface CampaignCardProps {
  campaign: Campaign;
  onSuccess: () => void;
}

const CampaignCard = ({ campaign, onSuccess }: CampaignCardProps) => {
  const [donateOpen, setDonateOpen] = useState(false);

  const progress = Number((campaign.raised * 100n) / campaign.goal);
  const daysLeft = Math.max(
    0,
    Math.ceil((Number(campaign.deadline) * 1000 - Date.now()) / (1000 * 60 * 60 * 24))
  );
  const isExpired = Date.now() > Number(campaign.deadline) * 1000;

  return (
    <>
      <Card className="hover:shadow-card-hover transition-smooth overflow-hidden">
        <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="flex justify-between items-start mb-2">
            <Badge variant={campaign.active ? "default" : "secondary"}>
              {campaign.active ? "Active" : "Completed"}
            </Badge>
            {isExpired && campaign.active && (
              <Badge variant="destructive">Expired</Badge>
            )}
          </div>
          <CardTitle className="line-clamp-2">{campaign.title}</CardTitle>
        </CardHeader>

        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-semibold">{progress.toFixed(1)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <TrendingUp className="h-4 w-4 text-primary mt-0.5" />
              <div>
                <p className="text-muted-foreground">Raised</p>
                <p className="font-semibold">{formatEther(campaign.raised)} ETH</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Target className="h-4 w-4 text-accent mt-0.5" />
              <div>
                <p className="text-muted-foreground">Goal</p>
                <p className="font-semibold">{formatEther(campaign.goal)} ETH</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>
              {isExpired ? 'Campaign ended' : `${daysLeft} day${daysLeft !== 1 ? 's' : ''} left`}
            </span>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            onClick={() => setDonateOpen(true)}
            disabled={!campaign.active || isExpired}
            className="w-full"
          >
            Donate Now
          </Button>
        </CardFooter>
      </Card>

      <DonateDialog
        open={donateOpen}
        onOpenChange={setDonateOpen}
        campaign={campaign}
        onSuccess={onSuccess}
      />
    </>
  );
};

export default CampaignCard;
