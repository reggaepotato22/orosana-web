import { ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-landscape.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-earth/30 via-earth/20 to-earth/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Location Tag */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <MapPin size={16} className="text-ochre" />
            <span className="text-background text-sm tracking-wider">
              Ngong Hills, Kenya • Near the Great Rift Valley
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-background font-bold mb-6 animate-fade-in-up animation-delay-200">
            Orosana
            <span className="block text-3xl md:text-4xl lg:text-5xl font-normal mt-2 text-background/90">
              Guest Farm
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-background/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400 leading-relaxed">
            Where the African savanna meets boutique hospitality. Experience authentic farm life, 
            Maasai heritage, and breathtaking Rift Valley views.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Button variant="hero" size="xl" asChild>
              <a href="#booking">Reserve Your Escape</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#experiences">Explore Experiences</a>
            </Button>
          </div>

          {/* Maasai Pattern Divider */}
          <div className="mt-16 w-48 mx-auto maasai-border rounded-full animate-fade-in animation-delay-600" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a
          href="#accommodations"
          className="flex flex-col items-center gap-2 text-background/70 hover:text-background transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Discover</span>
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
