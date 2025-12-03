import Navbar from "@/components/Navbar";
import AccommodationsSection from "@/components/AccommodationsSection";
import Footer from "@/components/Footer";

const Accommodations = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <AccommodationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Accommodations;
