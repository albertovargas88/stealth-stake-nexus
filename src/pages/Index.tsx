import { StakingDashboard } from "@/components/StakingDashboard";
import heroImage from "@/assets/hero-staking.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Cyber Grid Overlay */}
        <div className="absolute inset-0 cyber-grid opacity-30" />
        
        {/* Hero Content */}
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-mono">
              <span className="gradient-text">Stake Together,</span>
              <br />
              <span className="text-foreground">Stay Private</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join confidential staking pools where your contribution amounts remain cryptographically protected. 
              Earn rewards while maintaining complete privacy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <div className="flex items-center gap-2 text-sm text-primary">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                Zero Knowledge Protocol Active
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary">
                <div className="w-2 h-2 bg-secondary rounded-full animate-glow-pulse" />
                3,226 Anonymous Stakers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="relative">
        <div className="container mx-auto px-4 py-12">
          <StakingDashboard />
        </div>
      </section>
    </div>
  );
};

export default Index;
