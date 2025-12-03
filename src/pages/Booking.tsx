import Navbar from "@/components/Navbar";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Booking = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
