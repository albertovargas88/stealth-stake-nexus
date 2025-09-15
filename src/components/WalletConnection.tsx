import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Card } from "@/components/ui/card";
import { Wallet, Shield } from "lucide-react";
import { useAccount } from 'wagmi';

export const WalletConnection = () => {
  const { address, isConnected } = useAccount();

  return (
    <Card className="p-6 bg-card/50 border-primary/20 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
            <Wallet className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Wallet Status</h3>
            <p className="text-sm text-muted-foreground">
              {isConnected ? "Connected" : "Not connected"}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {isConnected && address && (
            <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-lg border border-primary/30">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-mono text-foreground">
                {address.slice(0, 6)}...{address.slice(-4)}
              </span>
            </div>
          )}
          <ConnectButton 
            chainStatus="icon"
            accountStatus={{
              smallScreen: 'avatar',
              largeScreen: 'full',
            }}
            showBalance={{
              smallScreen: false,
              largeScreen: true,
            }}
          />
        </div>
      </div>
    </Card>
  );
};