# BlockLand - Blockchain Platform & Crowdfunding DApp

A modern, full-stack website combining a Blockchain-based Land Registration System, Digital Content Distribution platform, and a fully functional **Decentralized Crowdfunding DApp**.

## 🚀 Features

### 📄 Information Website
- **Landing Page**: Modern blockchain-themed design
- **About Section**: Mission and vision 
- **Features**: Platform capabilities showcase
- **How It Works**: Step-by-step process explanation
- **Use Cases**: Real-world applications (Land Registration, Content Distribution)
- **Contact Form**: Get in touch section

### 💰 Crowdfunding DApp (NEW!)
A complete decentralized crowdfunding application with:
- **🦊 Wallet Connection**: MetaMask integration using ethers.js v6
- **✨ Create Campaigns**: Launch blockchain-based fundraising campaigns
- **💸 Donate**: Support campaigns with cryptocurrency (ETH)
- **📊 Real-time Updates**: Live campaign progress tracking
- **⚡ Auto-release**: Funds automatically released when goal is met or deadline passes
- **🔒 Secure**: All transactions secured by smart contract on blockchain

## 🛠 Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Web3**: ethers.js v6
- **Routing**: React Router v6
- **State Management**: React Context API
- **Smart Contracts**: Solidity ^0.8.20

## 📝 Smart Contract

The crowdfunding platform uses a Solidity smart contract (`Crowdfund.sol`) with these features:

### Key Functions
```solidity
// Create a new campaign
function createCampaign(string memory _title, uint256 _goal, uint256 _durationInDays)

// Donate to a campaign
function donate(uint256 _campaignId) payable

// Get campaign details
function getCampaign(uint256 _id) returns (address, uint256, uint256, uint256, bool, string)

// Get list of active campaigns
function getActiveCampaigns() returns (uint256[])
```

### Contract Features
- ✅ Campaign creation with title, goal, and deadline
- ✅ ETH donations tracked per user
- ✅ Auto-release funds when goal reached or deadline passed
- ✅ Active campaign filtering
- ✅ Full transparency - all data on-chain

## 🚦 Getting Started

### Prerequisites

- **Node.js 16+** or **Bun**
- **MetaMask** wallet browser extension
- **Deployed Crowdfund smart contract** (see deployment section)

### Installation

```bash
# Install dependencies
bun install
# or
npm install

# Start development server
bun run dev
# or
npm run dev
```

The app will be available at `http://localhost:8080`

### ⚙️ Configuration

**IMPORTANT**: Before using the crowdfunding features, you must:

1. **Deploy the Smart Contract**
   - Deploy `Crowdfund.sol` to your preferred network (Ethereum Mainnet, Sepolia, Polygon, etc.)
   - Get the deployed contract address

2. **Update Contract Address**
   
   Edit `src/lib/contract.ts`:
   ```typescript
   export const CROWDFUND_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS_HERE";
   ```

3. **Connect MetaMask**
   - Ensure MetaMask is connected to the same network where you deployed the contract

## 📁 Project Structure

```
src/
├── components/
│   ├── crowdfund/              # Crowdfunding DApp components
│   │   ├── CampaignCard.tsx    # Individual campaign display
│   │   ├── CampaignList.tsx    # Grid of campaigns
│   │   ├── CreateCampaignDialog.tsx  # Campaign creation form
│   │   └── DonateDialog.tsx    # Donation interface
│   ├── ui/                     # Reusable UI components (shadcn)
│   ├── Header.tsx              # Navigation with Crowdfund link
│   ├── Hero.tsx                # Landing hero section
│   ├── About.tsx               # About section
│   ├── Features.tsx            # Features showcase
│   ├── HowItWorks.tsx          # Process explanation
│   ├── UseCases.tsx            # Use cases display
│   ├── Contact.tsx             # Contact form
│   └── Footer.tsx              # Site footer
├── contexts/
│   └── Web3Context.tsx         # Web3 wallet connection & state
├── lib/
│   ├── contract.ts             # Smart contract ABI and config
│   └── utils.ts                # Utility functions
├── pages/
│   ├── Index.tsx               # Landing page
│   ├── Crowdfund.tsx           # Crowdfunding DApp main page
│   └── NotFound.tsx            # 404 page
├── assets/                     # Images
├── index.css                   # Global styles & design system
└── App.tsx                     # Main app with routing & Web3Provider
```

## 🎯 Usage

### Information Website

Navigate to the homepage (`/`) to:
- Learn about blockchain land registration
- Explore digital content distribution
- Understand platform features and benefits

### Crowdfunding DApp

1. **Access the DApp**
   - Click "Crowdfund" button in the navigation header
   - Or navigate to `/crowdfund`

2. **Connect Wallet**
   - Click "Connect Wallet"
   - Approve MetaMask connection
   - Ensure you're on the correct network

3. **Create a Campaign**
   - Click "Create Campaign" button
   - Fill in:
     - **Title**: Campaign name
     - **Goal**: Funding target in ETH
     - **Duration**: Campaign length in days
   - Confirm transaction in MetaMask
   - Wait for blockchain confirmation

4. **Browse & Donate**
   - View all campaigns with progress bars
   - See time remaining and funding status
   - Click "Donate Now" on any active campaign
   - Enter donation amount in ETH
   - Confirm transaction

5. **Track Progress**
   - Real-time updates of raised funds
   - Progress percentage display
   - Days remaining countdown
   - Campaign status (Active/Completed/Expired)

## 🎨 Design System

Comprehensive design system featuring:
- **Colors**: HSL-based semantic tokens
- **Gradients**: `--tech-gradient`, `--hero-gradient`
- **Shadows**: `--shadow-card`, `--shadow-card-hover`, `--shadow-glow`
- **Animations**: Smooth transitions and hover effects
- **Typography**: Consistent font scaling
- **Responsive**: Mobile-first approach
- **Dark Mode**: Ready for implementation

## 🔧 Development

```bash
# Run development server
bun run dev

# Build for production
bun run build

# Type checking
bun run typecheck

# Preview production build
bun run preview
```


## 🌐 Deployment

### Via Lovable (Recommended)

Simply open [Lovable](https://lovable.dev/projects/5a0ec064-b0be-4fb2-8430-fb67e446f42b) and click on **Share → Publish**.

### Manual Deployment

The app can be deployed to any static hosting service:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop `dist/` folder
- **GitHub Pages**: Use `gh-pages` branch
- **AWS S3 + CloudFront**: Upload `dist/` to S3 bucket

**Remember**: Update the contract address in `src/lib/contract.ts` before deploying!

## 🔗 Custom Domain

You can connect a custom domain to your Lovable project!

Navigate to **Project → Settings → Domains** and click **Connect Domain**.

Read more: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain)

## 📋 Smart Contract Deployment Guide

1. **Install Hardhat or Foundry**
   ```bash
   npm install --save-dev hardhat
   ```

2. **Compile the Contract**
   ```bash
   npx hardhat compile
   ```

3. **Deploy to Network**
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

4. **Verify on Etherscan**
   ```bash
   npx hardhat verify --network sepolia DEPLOYED_CONTRACT_ADDRESS
   ```

5. **Update Frontend**
   - Copy deployed address
   - Paste into `src/lib/contract.ts`

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🆘 Support

- **Lovable Docs**: https://docs.lovable.dev
- **Project URL**: https://lovable.dev/projects/5a0ec064-b0be-4fb2-8430-fb67e446f42b
- **GitHub Issues**: Report bugs and feature requests

---

Built with ❤️ using [Lovable](https://lovable.dev)
