import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Lock, TrendingUp, Users, Eye, EyeOff } from "lucide-react";

interface StakingPoolProps {
  poolId: string;
  poolName: string;
  totalStaked: string;
  apy: number;
  participants: number;
  minStake: string;
  maxCapacity: string;
}

export const StakingPool = ({
  poolId,
  poolName,
  totalStaked,
  apy,
  participants,
  minStake,
  maxCapacity,
}: StakingPoolProps) => {
  const [stakeAmount, setStakeAmount] = useState("");
  const [isStaking, setIsStaking] = useState(false);
  const [myStake, setMyStake] = useState("0");

  const capacityUsed = (parseFloat(totalStaked) / parseFloat(maxCapacity)) * 100;

  const handleStake = async () => {
    if (!stakeAmount || parseFloat(stakeAmount) < parseFloat(minStake)) return;
    
    setIsStaking(true);
    // Simulate staking transaction
    setTimeout(() => {
      setMyStake((prev) => (parseFloat(prev) + parseFloat(stakeAmount)).toString());
      setStakeAmount("");
      setIsStaking(false);
    }, 2000);
  };

  return (
    <Card className="p-6 bg-card/50 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
      <div className="space-y-4">
        {/* Pool Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Lock className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{poolName}</h3>
              <p className="text-sm text-muted-foreground">Pool #{poolId}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-secondary/20 rounded-lg border border-secondary/30">
            <TrendingUp className="h-4 w-4 text-secondary" />
            <span className="text-sm font-semibold text-secondary">{apy}% APY</span>
          </div>
        </div>

        {/* Pool Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Total Staked</p>
            <p className="font-mono text-lg font-semibold text-primary">{totalStaked} ETH</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Participants</p>
            <div className="flex items-center justify-center gap-1">
              <Users className="h-4 w-4 text-accent" />
              <p className="font-mono text-lg font-semibold text-accent">{participants}</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">My Stake</p>
            <div className="flex items-center justify-center gap-1">
              <EyeOff className="h-4 w-4 text-foreground" />
              <p className="font-mono text-lg font-semibold text-foreground">{myStake} ETH</p>
            </div>
          </div>
        </div>

        {/* Capacity Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Pool Capacity</span>
            <span className="text-muted-foreground">{capacityUsed.toFixed(1)}% filled</span>
          </div>
          <Progress value={capacityUsed} className="h-2" />
        </div>

        {/* Staking Interface */}
        <div className="space-y-3 pt-2 border-t border-border/50">
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder={`Min: ${minStake} ETH`}
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
              className="bg-background/50 border-primary/30 font-mono"
            />
            <Button 
              variant="glow" 
              onClick={handleStake}
              disabled={isStaking || !stakeAmount || parseFloat(stakeAmount) < parseFloat(minStake)}
              className="flex-shrink-0"
            >
              {isStaking ? "Staking..." : "Stake"}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Minimum stake: {minStake} ETH • Your contribution amount remains private
          </p>
        </div>
      </div>
    </Card>
  );
};