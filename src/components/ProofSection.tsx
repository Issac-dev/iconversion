import { BarChart3, TrendingUp } from "lucide-react";

const ProofSection = () => {
  const testimonials = [
    {
      quote: "Conversion Rescue fixed our checkout in 48 hours. Sales jumped 34% in the first week.",
      author: "Sarah Johnson",
      role: "CEO, TechFlow SaaS",
      result: "+34% Sales",
    },
    {
      quote: "They found issues we didn't even know existed. Our funnel conversion doubled.",
      author: "Michael Chen",
      role: "Founder, EcomGrowth",
      result: "2x Conversion",
    },
    {
      quote: "Best investment we made this year. Paid for itself in 3 days.",
      author: "Emily Rodriguez",
      role: "Marketing Director, ServiceHub",
      result: "3-Day ROI",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Real Results, Real Fast
          </h2>
          <p className="text-lg text-muted-foreground">
            See what happens when you stop the bleeding
          </p>
        </div>

        {/* Results metrics */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 animate-slide-in-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">+47%</div>
                <div className="text-sm text-muted-foreground">Avg Conversion Increase</div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Our clients see an average 47% boost in conversions within the first 30 days after fixes go live.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 animate-slide-in-right">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2.3s</div>
                <div className="text-sm text-muted-foreground">Avg Speed Improvement</div>
              </div>
            </div>
            <p className="text-muted-foreground">
              We cut average page load times by 2.3 seconds, directly translating to more sales and better UX.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-4">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {testimonial.result}
                </div>
                <p className="text-foreground italic mb-4">"{testimonial.quote}"</p>
              </div>
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Recent Projects</h3>
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏎</span>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Autos Mechanics</h4>
                  <p className="text-muted-foreground">
                    Full rebuild of a luxury auto service website. Improved site speed from 8.3s to 1.7s.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏋️‍♂️</span>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Adika Sportswear</h4>
                  <p className="text-muted-foreground">
                    Created a dynamic e-commerce layout and product showcase to boost engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
