import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-accent">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/80 via-accent/50 to-accent/80" />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main headline with animation */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
            <span className="block mb-2 text-white">We Fix Your Leaking Funnel</span>
            <span className="block mb-2 text-white">in 72 Hours</span>
            <span className="block bg-gradient-to-r from-primary-glow via-primary to-primary-glow bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(22,163,74,0.5)]">
              Increase Conversions or Pay 30% Less
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto animate-fade-in text-balance" style={{ animationDelay: "0.2s" }}>
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
            <p className="text-sm text-white/70">
              🔥 3 Emergency Slots Available This Week
            </p>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow drop-shadow-[0_0_20px_rgba(22,163,74,0.8)]">72h</div>
              <div className="text-sm text-white/70 mt-1">Delivery Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow drop-shadow-[0_0_20px_rgba(22,163,74,0.8)]">30%</div>
              <div className="text-sm text-white/70 mt-1">Money-Back Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow drop-shadow-[0_0_20px_rgba(22,163,74,0.8)]">7 Days</div>
              <div className="text-sm text-white/70 mt-1">Support Included</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
