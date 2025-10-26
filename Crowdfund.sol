// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title Crowdfund
 * @dev Decentralized crowdfunding smart contract
 * @notice Deploy this contract and update the address in src/lib/contract.ts
 */
contract Crowdfund {
    struct Campaign {
        address owner;
        uint256 goal;
        uint256 deadline;
        uint256 raised;
        bool active;
        string title; 
    }
    
    mapping(uint256 => Campaign) public campaigns;
    mapping(uint256 => mapping(address => uint256)) public contributions;
    uint256 public campaignCount;
    
    event CampaignCreated(uint256 id, string title, uint256 goal, uint256 deadline);
    event Donated(uint256 campaignId, address donor, uint256 amount);
    event FundsReleased(uint256 campaignId, uint256 amount);
    
    /**
     * @dev Create a new crowdfunding campaign
     * @param _title Campaign title
     * @param _goal Funding goal in wei
     * @param _durationInDays Campaign duration in days
     */
    function createCampaign(string memory _title, uint256 _goal, uint256 _durationInDays) external payable {
        require(msg.value == 0, "No initial funds needed");
        
        campaignCount++;
        uint256 deadline = block.timestamp + (_durationInDays * 1 days);
        
        campaigns[campaignCount] = Campaign({
            owner: msg.sender,
            goal: _goal,
            deadline: deadline,
            raised: 0,
            active: true,
            title: _title
        });
        
        emit CampaignCreated(campaignCount, _title, _goal, deadline);
    }
    
    /**
     * @dev Donate to a campaign
     * @param _campaignId ID of the campaign to donate to
     */
    function donate(uint256 _campaignId) external payable {
        Campaign storage campaign = campaigns[_campaignId];
        require(campaign.active, "Campaign not active");
        require(block.timestamp < campaign.deadline, "Campaign expired");
        require(msg.value > 0, "Donation must be > 0");
        
        campaign.raised += msg.value;
        contributions[_campaignId][msg.sender] += msg.value;
        
        emit Donated(_campaignId, msg.sender, msg.value);
        
        // AUTO-RELEASE LOGIC
        _checkAndRelease(_campaignId);
    }
    
    /**
     * @dev Internal function to check and release funds
     * @param _campaignId ID of the campaign to check
     */
    function _checkAndRelease(uint256 _campaignId) internal {
        Campaign storage campaign = campaigns[_campaignId];
        
        if (campaign.raised >= campaign.goal || block.timestamp >= campaign.deadline) {
            campaign.active = false;
            uint256 amount = campaign.raised;
            payable(campaign.owner).transfer(amount);
            emit FundsReleased(_campaignId, amount);
        }
    }
    
    /**
     * @dev Get campaign details
     * @param _id Campaign ID
     * @return owner Campaign owner address
     * @return goal Funding goal
     * @return deadline Campaign deadline timestamp
     * @return raised Amount raised so far
     * @return active Campaign status
     * @return title Campaign title
     */
    function getCampaign(uint256 _id) external view returns (
        address owner,
        uint256 goal,
        uint256 deadline,
        uint256 raised,
        bool active,
        string memory title
    ) {
        Campaign memory c = campaigns[_id];
        return (c.owner, c.goal, c.deadline, c.raised, c.active, c.title);
    }
    
    /**
     * @dev Get user's contribution to a campaign
     * @param _campaignId Campaign ID
     * @param _user User address
     * @return Contribution amount
     */
    function getMyContribution(uint256 _campaignId, address _user) external view returns (uint256) {
        return contributions[_campaignId][_user];
    }
    
    /**
     * @dev Get list of active campaign IDs
     * @return Array of active campaign IDs
     */
    function getActiveCampaigns() external view returns (uint256[] memory) {
        uint256[] memory activeIds = new uint256[](campaignCount);
        uint256 count = 0;
        for (uint256 i = 1; i <= campaignCount; i++) {
            if (campaigns[i].active) {
                activeIds[count] = i;
                count++;
            }
        }
        
        uint256[] memory result = new uint256[](count);
        for (uint256 i = 0; i < count; i++) {
            result[i] = activeIds[i];
        }
        return result;
    }
}
