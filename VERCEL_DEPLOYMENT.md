# Vercel Deployment Guide for Stealth Stake Nexus

This guide provides step-by-step instructions for deploying the Stealth Stake Nexus project to Vercel.

## Prerequisites

- Vercel account (free tier available)
- GitHub account with the project repository
- Environment variables configured

## Step-by-Step Deployment Process

### 1. Access Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click on "New Project" or "Add New..." → "Project"

### 2. Import GitHub Repository

1. In the "Import Git Repository" section, search for `albertovargas88/stealth-stake-nexus`
2. Click on the repository when it appears
3. Click "Import" to proceed

### 3. Configure Project Settings

1. **Project Name**: `stealth-stake-nexus` (or your preferred name)
2. **Framework Preset**: Select "Vite" from the dropdown
3. **Root Directory**: Leave as default (`.`)
4. **Build Command**: `npm run build`
5. **Output Directory**: `dist`
6. **Install Command**: `npm install`

### 4. Environment Variables Configuration

Click on "Environment Variables" and add the following variables:

```
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID
NEXT_PUBLIC_INFURA_API_KEY=YOUR_INFURA_API_KEY
```

**Important**: Make sure to add these variables for all environments (Production, Preview, Development).

### 5. Advanced Configuration (Optional)

If you need to customize the build process, you can add a `vercel.json` file to the project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 6. Deploy the Project

1. Click "Deploy" to start the deployment process
2. Wait for the build to complete (usually 2-5 minutes)
3. Once deployed, you'll receive a deployment URL

### 7. Custom Domain Setup (Optional)

1. Go to your project dashboard in Vercel
2. Click on "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (up to 24 hours)

## Post-Deployment Configuration

### 1. Verify Deployment

1. Visit your deployment URL
2. Test wallet connection functionality
3. Verify that the app loads correctly
4. Check that all environment variables are working

### 2. Update Smart Contract Addresses

If you deploy the smart contract to a different network or get a different contract address:

1. Update the contract address in your frontend code
2. Redeploy to Vercel
3. Update any documentation with the new address

### 3. Monitor Performance

1. Use Vercel Analytics to monitor performance
2. Check the "Functions" tab for any serverless function issues
3. Monitor the "Speed Insights" for optimization opportunities

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check that all dependencies are in `package.json`
   - Verify that the build command is correct
   - Check for TypeScript errors

2. **Environment Variables Not Working**:
   - Ensure variables are added to all environments
   - Check that variable names match exactly
   - Redeploy after adding new variables

3. **Wallet Connection Issues**:
   - Verify WalletConnect Project ID is correct
   - Check that RPC URLs are accessible
   - Ensure the app is served over HTTPS

4. **Smart Contract Interaction Issues**:
   - Verify contract address and ABI
   - Check that the correct network is selected
   - Ensure user has sufficient gas fees

### Performance Optimization

1. **Enable Vercel Analytics**:
   - Go to project settings
   - Enable "Vercel Analytics"
   - Monitor Core Web Vitals

2. **Optimize Bundle Size**:
   - Use dynamic imports for large components
   - Implement code splitting
   - Optimize images and assets

3. **Caching Strategy**:
   - Configure appropriate cache headers
   - Use Vercel's edge caching
   - Implement service worker for offline functionality

## Security Considerations

1. **Environment Variables**:
   - Never commit sensitive keys to the repository
   - Use Vercel's environment variable system
   - Regularly rotate API keys

2. **Smart Contract Security**:
   - Audit smart contracts before mainnet deployment
   - Use multi-signature wallets for contract ownership
   - Implement proper access controls

3. **Frontend Security**:
   - Validate all user inputs
   - Implement proper error handling
   - Use HTTPS for all communications

## Maintenance

1. **Regular Updates**:
   - Keep dependencies updated
   - Monitor for security vulnerabilities
   - Update smart contract addresses as needed

2. **Monitoring**:
   - Set up alerts for deployment failures
   - Monitor user feedback and error reports
   - Track performance metrics

3. **Backup Strategy**:
   - Regular database backups (if applicable)
   - Version control for all code changes
   - Document all configuration changes

## Support

For additional help:

1. Check Vercel's documentation: [vercel.com/docs](https://vercel.com/docs)
2. Review the project's README.md
3. Check GitHub issues for known problems
4. Contact the development team

## Deployment Checklist

- [ ] Repository imported to Vercel
- [ ] Build settings configured correctly
- [ ] Environment variables added
- [ ] Custom domain configured (if applicable)
- [ ] Deployment successful
- [ ] Wallet connection tested
- [ ] Smart contract interaction verified
- [ ] Performance monitoring enabled
- [ ] Security measures implemented
- [ ] Documentation updated

---

**Note**: This deployment guide assumes you're using the Sepolia testnet. For mainnet deployment, update the environment variables accordingly and ensure all security measures are in place.
