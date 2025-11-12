import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Bronze",
      price: "$1,500",
      description: "Quick fix for a single critical issue",
      features: [
        "One-page optimization",
        "Speed & performance audit",
        "Detailed conversion report",
        "72-hour delivery",
        "7 days support",
      ],
      popular: false,
    },
    {
      name: "Silver",
      price: "$2,500",
      description: "Complete landing page overhaul",
      features: [
        "Landing page optimization",
        "Checkout flow fixes",
        "Custom ad creatives (3 variants)",
        "A/B test setup",
        "72-hour delivery",
        "7 days priority support",
      ],
      popular: true,
    },
    {
      name: "Gold",
      price: "$4,500",
      description: "Full funnel transformation",
      features: [
        "Complete funnel overhaul",
        "Multi-page optimization",
        "Analytics & tracking setup",
        "Conversion dashboard",
        "Custom automation setup",
        "72-hour delivery",
        "14 days VIP support",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Emergency Rescue Packages
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the package that matches your emergency level
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-scale-in ${
                pkg.popular
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-border hover:border-primary/30"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.popular ? "cta" : "default"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="https://calendly.com/iwebdesign12/30min" target="_blank" rel="noopener noreferrer">
                  Select {pkg.name}
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          All packages include our 30% money-back guarantee if we don't increase conversions
        </p>
      </div>
    </section>
  );
};

export default Pricing;
