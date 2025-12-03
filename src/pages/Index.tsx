import Navbar from "@/components/Navbar";
import FlyingStarling from "@/components/FlyingStarling";
import HeroSection from "@/components/HeroSection";
import AccommodationsSection from "@/components/AccommodationsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";
import BlogSection from "@/components/BlogSection";
import MapSection from "@/components/MapSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <FlyingStarling />
      <Navbar />
      <main>
        <HeroSection />
        <AccommodationsSection />
        <ExperiencesSection />
        <GallerySection />
        <BookingSection />
        <BlogSection />
        <MapSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
