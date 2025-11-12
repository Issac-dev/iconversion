import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary animate-gradient bg-[length:200%_100%]" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-semibold">Limited Availability</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            3 Emergency Slots Open This Week
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Don't let another day of lost revenue pass you by. Book your emergency call now and we'll start fixing your funnel within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              variant="hero"
              size="xl"
              className="bg-background text-foreground hover:bg-background/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] group"
              asChild
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book Your Emergency Call Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/80 mt-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            ✓ Free 5-minute audit included • ✓ 72-hour delivery • ✓ 30% money-back guarantee
          </p>

          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ backgroundSize: "200% 100%" }} />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
