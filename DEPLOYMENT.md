# Smart Contract Deployment Guide

This guide will walk you through deploying the Crowdfund smart contract and connecting it to your web app.

## Prerequisites

- Node.js 16+ installed
- MetaMask wallet with testnet ETH (for testing)
- Basic understanding of blockchain and smart contracts

## Option 1: Deploy with Remix IDE (Easiest)

### Step 1: Compile the Contract

1. Go to [Remix IDE](https://remix.ethereum.org/)
2. Create a new file called `Crowdfund.sol`
3. Copy the entire contract from `Crowdfund.sol` in this repository
4. Click on "Solidity Compiler" in the left sidebar
5. Select compiler version `0.8.20`
6. Click "Compile Crowdfund.sol"

### Step 2: Deploy the Contract

1. Click on "Deploy & Run Transactions" in the left sidebar
2. Change "Environment" to "Injected Provider - MetaMask"
3. Connect your MetaMask wallet
4. Select a network (recommended for testing: Sepolia or Goerli)
5. Ensure you have testnet ETH (get from faucet if needed)
6. Click "Deploy"
7. Confirm the transaction in MetaMask
8. Wait for deployment confirmation

### Step 3: Copy Contract Address

1. After deployment, you'll see the contract under "Deployed Contracts"
2. Copy the contract address (e.g., `0x1234...5678`)
3. Save this address - you'll need it for the frontend

## Option 2: Deploy with Hardhat (Advanced)

### Step 1: Setup Hardhat Project

```bash
mkdir crowdfund-deployment
cd crowdfund-deployment
npm init -y
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
npx hardhat init
```

Choose "Create a TypeScript project" and accept defaults.

### Step 2: Add Contract

Copy `Crowdfund.sol` to `contracts/Crowdfund.sol`

### Step 3: Configure Networks

Edit `hardhat.config.ts`:

```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/YOUR_INFURA_KEY`,
      accounts: ["YOUR_PRIVATE_KEY"]
    }
  }
};

export default config;
```

⚠️ **Never commit private keys!** Use environment variables in production.

### Step 4: Create Deployment Script

Create `scripts/deploy.ts`:

```typescript
import { ethers } from "hardhat";

async function main() {
  const Crowdfund = await ethers.getContractFactory("Crowdfund");
  const crowdfund = await Crowdfund.deploy();

  await crowdfund.waitForDeployment();

  console.log("Crowdfund deployed to:", await crowdfund.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

### Step 5: Deploy

```bash
npx hardhat compile
npx hardhat run scripts/deploy.ts --network sepolia
```

Copy the deployed contract address from the output.

### Step 6: Verify on Etherscan (Optional)

```bash
npx hardhat verify --network sepolia DEPLOYED_ADDRESS
```

## Connect to Frontend

### Step 1: Update Contract Address

Edit `src/lib/contract.ts`:

```typescript
export const CROWDFUND_ADDRESS = "0xYourDeployedContractAddress";
```

Replace with your actual deployed contract address.

### Step 2: Configure Network

Ensure MetaMask is connected to the same network where you deployed:

- **Sepolia Testnet**: ChainID 11155111
- **Goerli Testnet**: ChainID 5
- **Ethereum Mainnet**: ChainID 1 (use only with real ETH!)

### Step 3: Test the DApp

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/crowdfund`
3. Click "Connect Wallet"
4. Create a test campaign
5. Try donating to it

## Get Testnet ETH

### Sepolia Faucets
- https://sepoliafaucet.com/
- https://www.infura.io/faucet/sepolia

### Goerli Faucets
- https://goerlifaucet.com/
- https://faucet.quicknode.com/ethereum/goerli

## Troubleshooting

### "Insufficient funds" Error
- Make sure you have testnet ETH in your wallet
- Get more from faucets above

### "Wrong network" Error
- Switch MetaMask to the network where you deployed
- Check contract address is correct

### "Contract not found" Error
- Verify contract address in `src/lib/contract.ts`
- Ensure contract deployment was successful
- Wait a few minutes for blockchain confirmation

### Transaction Pending Forever
- Increase gas price in MetaMask
- Network might be congested - try again later

## Production Deployment

### Before Mainnet Deployment

⚠️ **IMPORTANT**: Deploying to Ethereum mainnet costs real ETH!

1. **Audit the contract**: Have it professionally audited
2. **Test thoroughly**: Test on testnets extensively
3. **Gas optimization**: Optimize for lower gas costs
4. **Security review**: Check for vulnerabilities
5. **Have sufficient ETH**: Deployment costs gas

### Mainnet Deployment

Only deploy to mainnet after:
- ✅ Complete testing on testnets
- ✅ Security audit completed
- ✅ All features working correctly
- ✅ Understanding gas costs
- ✅ Having real ETH for deployment

## Networks Reference

| Network | ChainID | RPC URL | Explorer | Currency |
|---------|---------|---------|----------|----------|
| Sepolia | 11155111 | https://sepolia.infura.io | https://sepolia.etherscan.io | SepoliaETH |
| Goerli | 5 | https://goerli.infura.io | https://goerli.etherscan.io | GoerliETH |
| Mainnet | 1 | https://mainnet.infura.io | https://etherscan.io | ETH |

## Support

For issues with:
- **Smart Contract**: Review Solidity documentation
- **Deployment**: Check Hardhat/Remix documentation
- **Frontend**: See main README.md

## Next Steps

After successful deployment:
1. ✅ Update contract address in frontend
2. ✅ Test all features (create campaign, donate)
3. ✅ Share with users
4. ✅ Monitor transactions on Etherscan

Happy deploying! 🚀
