import { Bird, Leaf, Mountain, Users, Flame, Camera } from "lucide-react";
import plantationImg from "@/assets/plantation.jpg";
import birdwatchingImg from "@/assets/birdwatching.jpg";
import fireplaceImg from "@/assets/fireplace.jpg";

const experiences = [
  {
    icon: Bird,
    title: "Bird Watching",
    description:
      "Home to over 150 bird species including the magnificent Superb Starling. Join our guided dawn walks through the estate.",
    image: birdwatchingImg,
  },
  {
    icon: Leaf,
    title: "Fruit Plantations",
    description:
      "Explore our orchards bursting with dragon fruits, mangoes, apples, oranges, and exotic fruits. Seasonal fruit picking available.",
    image: plantationImg,
  },
  {
    icon: Flame,
    title: "Fireside Evenings",
    description:
      "Gather around our open fireplace for storytelling, stargazing, and traditional Maasai cultural experiences.",
    image: fireplaceImg,
  },
];

const activities = [
  { icon: Mountain, title: "Ngong Hills Hikes", desc: "Guided treks with stunning views" },
  { icon: Users, title: "Maasai Cultural Tours", desc: "Authentic community visits" },
  { icon: Camera, title: "Photography Safaris", desc: "Capture wildlife & landscapes" },
  { icon: Leaf, title: "Farm to Table", desc: "Cooking with fresh harvest" },
];

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Experiences
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Discover the Magic
          </h2>
          <p className="text-muted-foreground text-lg">
            From sunrise bird walks to fireside storytelling, every moment at Orosana 
            is an opportunity for wonder and connection.
          </p>
          <div className="w-24 maasai-border mx-auto mt-8 rounded-full" />
        </div>

        {/* Featured Experiences */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="group relative rounded-2xl overflow-hidden h-96"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth via-earth/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <exp.icon size={24} className="text-ochre" />
                </div>
                <h3 className="font-serif text-2xl mb-2">{exp.title}</h3>
                <p className="text-background/80 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Activities */}
        <div className="bg-card rounded-2xl p-8 md:p-12">
          <h3 className="font-serif text-2xl text-center mb-8">More Adventures Await</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="flex items-start gap-4 p-4 rounded-xl bg-background hover:bg-secondary transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <activity.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{activity.title}</h4>
                  <p className="text-sm text-muted-foreground">{activity.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
