import Navbar from "@/components/Navbar";
import MapSection from "@/components/MapSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
