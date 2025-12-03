import { Users, Home, Tent, Flame, Wifi, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import farmhouseImg from "@/assets/farmhouse.jpg";
import cottageImg from "@/assets/cottage.jpg";
import campsiteImg from "@/assets/campsite.jpg";

const accommodations = [
  {
    id: 1,
    name: "The Farmhouse",
    subtitle: "5 Bedroom Luxury Retreat",
    description:
      "Our crown jewel - a stunning 5-bedroom farmhouse with panoramic Rift Valley views. Perfect for families or groups seeking an authentic yet luxurious farm experience.",
    image: farmhouseImg,
    features: ["5 En-suite Bedrooms", "Open Fireplace", "Full Kitchen", "Private Garden"],
    capacity: "Up to 12 guests",
    icon: Home,
    price: "From $450/night",
  },
  {
    id: 2,
    name: "Stone Cottage",
    subtitle: "Romantic Hideaway",
    description:
      "A charming stone cottage nestled among flowering gardens. The perfect retreat for couples seeking privacy and tranquility with stunning sunset views.",
    image: cottageImg,
    features: ["King Bedroom", "Fireplace", "Private Veranda", "Garden Views"],
    capacity: "2 guests",
    icon: Flame,
    price: "From $180/night",
  },
  {
    id: 3,
    name: "Safari Campsites",
    subtitle: "Glamping Under the Stars",
    description:
      "Experience the magic of the African bush in our luxury canvas tents. Complete with comfortable beds, en-suite facilities, and an open-air campfire area.",
    image: campsiteImg,
    features: ["Bell Tents", "Campfire Pit", "Hot Showers", "Bush Breakfast"],
    capacity: "2-4 guests per tent",
    icon: Tent,
    price: "From $95/night",
  },
];

const AccommodationsSection = () => {
  return (
    <section id="accommodations" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Accommodations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Your Home in the Hills
          </h2>
          <p className="text-muted-foreground text-lg">
            From luxurious farmhouse living to authentic bush camping, find your perfect stay 
            surrounded by the beauty of Ngong Hills.
          </p>
          <div className="w-24 maasai-border mx-auto mt-8 rounded-full" />
        </div>

        {/* Accommodations Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {accommodations.map((item, index) => (
            <div
              key={item.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-background">
                    <item.icon size={20} className="text-ochre" />
                    <span className="text-sm font-medium">{item.capacity}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl text-foreground mb-1">{item.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{item.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-serif text-lg text-foreground">{item.price}</span>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Amenities */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Wifi, label: "Free WiFi" },
            { icon: Car, label: "Free Parking" },
            { icon: Flame, label: "Fireplace" },
            { icon: Users, label: "Family Friendly" },
          ].map((amenity) => (
            <div key={amenity.label} className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <amenity.icon size={20} className="text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{amenity.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationsSection;
