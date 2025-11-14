import { useState } from "react";
import { Button } from "@/components/ui/button";
import autosImage from "@/assets/autos-mechanics.jpg";
import adikaImage from "@/assets/adika-sportswear.jpg";

type Industry = "All" | "Automotive" | "Sportswear" | "SaaS" | "E-commerce";

interface Project {
  id: number;
  title: string;
  industry: Industry;
  description: string;
  image: string;
  metrics: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Autos Mechanics",
    industry: "Automotive",
    description: "Full rebuild of a luxury auto service website. Improved site speed from 8.3s to 1.7s.",
    image: autosImage,
    metrics: "Speed: 8.3s → 1.7s",
  },
  {
    id: 2,
    title: "Adika Sportswear",
    industry: "Sportswear",
    description: "Created a dynamic e-commerce layout and product showcase to boost engagement.",
    image: adikaImage,
    metrics: "Engagement ↑ 67%",
  },
];

const PortfolioGallery = () => {
  const [activeFilter, setActiveFilter] = useState<Industry>("All");

  const industries: Industry[] = ["All", "Automotive", "Sportswear", "SaaS", "E-commerce"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.industry === activeFilter);

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Project Portfolio
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our recent work across different industries
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {industries.map((industry) => (
            <Button
              key={industry}
              variant={activeFilter === industry ? "default" : "outline"}
              onClick={() => setActiveFilter(industry)}
              className="transition-all duration-300"
            >
              {industry}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">
                    {project.metrics}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-muted-foreground text-lg">
              No projects found in this category yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGallery;
