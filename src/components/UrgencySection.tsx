import { TrendingUp, Zap, Target } from "lucide-react";

const UrgencySection = () => {
  const cards = [
    {
      icon: Zap,
      title: "Faster Sites",
      metric: "+Conversions",
      description: "Every second of load time costs you sales. We optimize for speed.",
      color: "from-primary/20 to-primary/5",
    },
    {
      icon: Target,
      title: "Optimized Checkouts",
      metric: "+Revenue",
      description: "Streamline your checkout flow and watch abandoned carts vanish.",
      color: "from-primary-glow/20 to-primary-glow/5",
    },
    {
      icon: TrendingUp,
      title: "Better Funnels",
      metric: "+ROI",
      description: "Fix leaks at every stage and turn more visitors into customers.",
      color: "from-primary/15 to-transparent",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Every Hour a Leak Persists,{" "}
            <span className="text-primary">You're Losing Sales</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't let technical issues drain your revenue. Here's what we fix:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <div className="text-3xl font-bold text-primary mb-4">{card.metric}</div>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
