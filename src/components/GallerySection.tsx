import { useState } from "react";
import { X } from "lucide-react";
import heroImg from "@/assets/hero-landscape.jpg";
import farmhouseImg from "@/assets/farmhouse.jpg";
import cottageImg from "@/assets/cottage.jpg";
import campsiteImg from "@/assets/campsite.jpg";
import plantationImg from "@/assets/plantation.jpg";
import fireplaceImg from "@/assets/fireplace.jpg";
import birdwatchingImg from "@/assets/birdwatching.jpg";
import ngongImg from "@/assets/ngong-hills.jpg";
import maasaiImg from "@/assets/maasai-culture.jpg";
import dragonFruitImg from "@/assets/dragon-fruit.jpg";

const galleryImages = [
  // { src: heroImg, alt: "Sunset over Ngong Hills", category: "Landscape" },
  { src: farmhouseImg, alt: "The Farmhouse", category: "Accommodation" },
  { src: cottageImg, alt: "Stone Cottage", category: "Accommodation" },
  { src: campsiteImg, alt: "Safari Campsite", category: "Accommodation" },
  { src: ngongImg, alt: "Ngong Hills panorama", category: "Landscape" },
  { src: plantationImg, alt: "Fruit Plantations", category: "Farm" },
  { src: fireplaceImg, alt: "Cozy Fireplace", category: "Interiors" },
  { src: birdwatchingImg, alt: "Bird Watching", category: "Activities" },
  // { src: maasaiImg, alt: "Maasai Culture", category: "Culture" },
  { src: dragonFruitImg, alt: "Dragon Fruit Harvest", category: "Farm" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];
  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Gallery
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Moments at Orosana
          </h2>
          <p className="text-muted-foreground text-lg">
            A glimpse into the beauty and experiences that await you at our guest farm.
          </p>
          <div className="w-24 maasai-border mx-auto mt-8 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 || index === 5 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-earth/0 group-hover:bg-earth/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-earth/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-background hover:text-ochre transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
