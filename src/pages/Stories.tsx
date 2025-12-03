import Navbar from "@/components/Navbar";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Stories = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Stories;
