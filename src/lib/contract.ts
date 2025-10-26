// Smart Contract Configuration
export const CROWDFUND_ADDRESS = "0x0000000000000000000000000000000000000000"; // Replace with deployed contract address

export const CROWDFUND_ABI = [
  "function createCampaign(string memory _title, uint256 _goal, uint256 _durationInDays) external payable",
  "function donate(uint256 _campaignId) external payable",
  "function getCampaign(uint256 _id) external view returns (address owner, uint256 goal, uint256 deadline, uint256 raised, bool active, string memory title)",
  "function getMyContribution(uint256 _campaignId, address _user) external view returns (uint256)",
  "function getActiveCampaigns() external view returns (uint256[] memory)",
  "function campaignCount() external view returns (uint256)",
  "event CampaignCreated(uint256 id, string title, uint256 goal, uint256 deadline)",
  "event Donated(uint256 campaignId, address donor, uint256 amount)",
  "event FundsReleased(uint256 campaignId, uint256 amount)"
];

export interface Campaign {
  id: number;
  owner: string;
  title: string;
  goal: bigint;
  deadline: bigint;
  raised: bigint;
  active: boolean;
}
