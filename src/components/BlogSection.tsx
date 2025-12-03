import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import birdwatchingImg from "@/assets/birdwatching.jpg";
import maasaiImg from "@/assets/maasai-culture.jpg";
import dragonFruitImg from "@/assets/dragon-fruit.jpg";

const blogPosts = [
  {
    id: 1,
    title: "A Guide to Bird Watching at Orosana",
    excerpt:
      "Discover the 150+ bird species that call our farm home, including the magnificent Superb Starling that inspired our logo.",
    image: birdwatchingImg,
    date: "November 28, 2024",
    category: "Wildlife",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Maasai Heritage of Ngong Hills",
    excerpt:
      "Learn about the rich cultural heritage of the Maasai people and how their traditions shape life around the Rift Valley.",
    image: maasaiImg,
    date: "November 15, 2024",
    category: "Culture",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "From Seed to Harvest: Our Dragon Fruit Journey",
    excerpt:
      "How we cultivated exotic dragon fruit in the Kenyan highlands and what makes our sustainable farming special.",
    image: dragonFruitImg,
    date: "October 30, 2024",
    category: "Farm Life",
    readTime: "4 min read",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Stories
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Tales from the Farm
          </h2>
          <p className="text-muted-foreground text-lg">
            Insights, adventures, and stories from life at Orosana Guest Farm.
          </p>
          <div className="w-24 maasai-border mx-auto mt-8 rounded-full" />
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                >
                  Read More
                  <ArrowRight
                    size={16}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Stories
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
