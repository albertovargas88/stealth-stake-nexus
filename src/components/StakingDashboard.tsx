import { WalletConnection } from "./WalletConnection";
import { StakingPool } from "./StakingPool";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Database, TrendingUp, Users } from "lucide-react";
import { useAccount, useBalance } from 'wagmi';
import { useToast } from "@/hooks/use-toast";

const mockPools = [
  {
    poolId: "001",
    poolName: "Ethereum Alpha",
    totalStaked: "12,547.8",
    apy: 8.2,
    participants: 1847,
    minStake: "0.1",
    maxCapacity: "50000",
  },
  {
    poolId: "002", 
    poolName: "Stability Core",
    totalStaked: "8,921.3",
    apy: 6.7,
    participants: 923,
    minStake: "0.5",
    maxCapacity: "25000",
  },
  {
    poolId: "003",
    poolName: "High Yield Pro",
    totalStaked: "5,234.1",
    apy: 12.4,
    participants: 456,
    minStake: "1.0",
    maxCapacity: "15000",
  },
];

export const StakingDashboard = () => {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({
    address: address,
  });
  const { toast } = useToast();

  return (
    <div className="space-y-6">
      {/* Wallet Connection */}
      <WalletConnection />

      {/* Privacy Features Banner */}
      <Card className="p-6 bg-gradient-accent/10 border-accent/30">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-accent/20 border border-accent/30">
            <Shield className="h-6 w-6 text-accent" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">Privacy Protection Enabled</h3>
            <p className="text-sm text-muted-foreground">
              Your individual stake amounts are cryptographically protected. Only aggregate pool metrics are visible to other participants.
            </p>
          </div>
          <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
            Zero Knowledge
          </Badge>
        </div>
      </Card>

      {/* Wallet Balance */}
      {isConnected && balance && (
        <Card className="p-6 bg-card/50 border-primary/20 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Your Balance</h3>
                <p className="text-sm text-muted-foreground">
                  Available for staking
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold font-mono text-primary">
                {parseFloat(balance.formatted).toFixed(4)} {balance.symbol}
              </p>
              <p className="text-sm text-muted-foreground">
                ≈ ${(parseFloat(balance.formatted) * 2000).toFixed(2)} USD
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Global Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-card/30 border-primary/20">
          <div className="flex items-center gap-3">
            <Database className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Total Value Locked</p>
              <p className="text-xl font-bold font-mono text-primary">26,703.2 ETH</p>
            </div>
          </div>
        </Card>
        <Card className="p-4 bg-card/30 border-secondary/20">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-secondary" />
            <div>
              <p className="text-sm text-muted-foreground">Avg APY</p>
              <p className="text-xl font-bold font-mono text-secondary">9.1%</p>
            </div>
          </div>
        </Card>
        <Card className="p-4 bg-card/30 border-accent/20">
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-accent" />
            <div>
              <p className="text-sm text-muted-foreground">Total Stakers</p>
              <p className="text-xl font-bold font-mono text-accent">3,226</p>
            </div>
          </div>
        </Card>
        <Card className="p-4 bg-card/30 border-primary/20">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Active Pools</p>
              <p className="text-xl font-bold font-mono text-primary">{mockPools.length}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Staking Pools */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Available Pools</h2>
          <Badge variant="outline" className="border-primary/30 text-primary">
            Confidential Staking
          </Badge>
        </div>
        
        <div className="grid gap-4">
          {mockPools.map((pool) => (
            <StakingPool key={pool.poolId} {...pool} />
          ))}
        </div>
      </div>
    </div>
  );
};