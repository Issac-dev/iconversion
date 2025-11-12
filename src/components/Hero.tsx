import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main headline with animation */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
            <span className="block mb-2">We Fix Your Leaking Funnel</span>
            <span className="block mb-2">in 72 Hours —</span>
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Increase Conversions or Pay 30% Less
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in text-balance" style={{ animationDelay: "0.2s" }}>
            A 3-day emergency service for brands losing revenue through slow pages, bad checkouts, and broken funnels.
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              variant="hero" 
              size="xl"
              className="group"
              asChild
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book Emergency Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              🔥 3 Emergency Slots Available This Week
            </p>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">72h</div>
              <div className="text-sm text-muted-foreground mt-1">Delivery Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">30%</div>
              <div className="text-sm text-muted-foreground mt-1">Money-Back Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">7 Days</div>
              <div className="text-sm text-muted-foreground mt-1">Support Included</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
