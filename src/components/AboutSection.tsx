import { Code2, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <div className="relative animate-slide-in-left">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code2 className="w-16 h-16 text-primary" />
                  </div>
                  <div className="text-2xl font-bold mb-2">Isaac Ola</div>
                  <div className="text-muted-foreground">Web Engineer & Conversion Specialist</div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 animate-float">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">72h Turnaround</span>
              </div>
            </div>

            {/* Content side */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Isaac Ola
              </h2>
              
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  I'm a web engineer and conversion specialist. I've built fast, modern experiences for brands across sportswear and automotive niches — helping them convert visitors into loyal customers. Conversion Rescue is my emergency service for businesses losing revenue through broken sites.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Funnels Fixed</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="text-2xl font-bold text-primary mb-1">$2M+</div>
                  <div className="text-sm text-muted-foreground">Revenue Recovered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
