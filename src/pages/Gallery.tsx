import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
