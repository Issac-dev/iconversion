import { Video, CreditCard, Rocket, Headphones } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Video,
      title: "Free 5-Min Audit Video",
      description: "We analyze your funnel and send you a personalized video showing exactly what's leaking.",
    },
    {
      number: "02",
      icon: CreditCard,
      title: "50% Deposit + Start Optimization",
      description: "Once you approve, pay 50% upfront and we immediately start fixing your critical issues.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Fixes Delivered in 72 Hours",
      description: "Your optimized funnel, landing page, or checkout goes live within 3 days. Guaranteed.",
    },
    {
      number: "04",
      icon: Headphones,
      title: "7 Days of Post-Launch Support",
      description: "We monitor performance and handle any tweaks needed to maximize your results.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            From diagnosis to delivery in 4 simple steps
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-[3.75rem] top-32 w-0.5 h-16 bg-gradient-to-b from-primary to-primary/20" />
              )}

              {/* Number badge */}
              <div className="relative flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">{step.number}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-4">
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
