import { useState } from "react";
import { Calendar, Users, Home, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import ngongImg from "@/assets/ngong-hills.jpg";

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    accommodation: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent!",
      description: "We'll get back to you within 24 hours. Asante sana!",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "",
      accommodation: "",
      message: "",
    });
  };

  return (
    <section id="booking" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 maasai-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Book Your Stay
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Reserve Your Escape
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to experience the magic of Orosana? Send us an inquiry and we will 
            craft the perfect stay for you.
          </p>
          <div className="w-24 maasai-border mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Booking Form */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="font-serif text-2xl text-foreground mb-6">Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+254 700 000 000"
                  className="bg-background"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Calendar size={14} className="inline mr-1" />
                    Check-in Date *
                  </label>
                  <Input
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Calendar size={14} className="inline mr-1" />
                    Check-out Date *
                  </label>
                  <Input
                    type="date"
                    required
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Users size={14} className="inline mr-1" />
                    Number of Guests *
                  </label>
                  <select
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="">Select guests</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Home size={14} className="inline mr-1" />
                    Accommodation
                  </label>
                  <select
                    value={formData.accommodation}
                    onChange={(e) =>
                      setFormData({ ...formData, accommodation: e.target.value })
                    }
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="">Select accommodation</option>
                    <option value="farmhouse">The Farmhouse (5 BR)</option>
                    <option value="cottage">Stone Cottage</option>
                    <option value="campsite">Safari Campsite</option>
                    <option value="undecided">Help me decide</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Special Requests / Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your trip plans, dietary requirements, or any special occasions..."
                  rows={4}
                  className="bg-background"
                />
              </div>

              <Button type="submit" variant="default" size="lg" className="w-full">
                <Send size={18} />
                Send Inquiry
              </Button>
            </form>
          </div>

          {/* Side Info */}
          <div className="space-y-8">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src={ngongImg}
                alt="Ngong Hills View"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Book on Platforms */}
            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <h4 className="font-serif text-xl text-foreground mb-4">
                Also Book Us On
              </h4>
              <div className="space-y-3">
                <a
                  href="https://airbnb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-background hover:bg-secondary transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF5A5F]/10 flex items-center justify-center">
                      <span className="text-[#FF5A5F] font-bold text-lg">A</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Airbnb</p>
                      <p className="text-sm text-muted-foreground">View our listing</p>
                    </div>
                  </div>
                  <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary" />
                </a>

                <a
                  href="https://tripadvisor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-background hover:bg-secondary transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#00AF87]/10 flex items-center justify-center">
                      <span className="text-[#00AF87] font-bold text-lg">T</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">TripAdvisor</p>
                      <p className="text-sm text-muted-foreground">Read reviews</p>
                    </div>
                  </div>
                  <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary" />
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-6">
              <h4 className="font-serif text-xl mb-4">Quick Response</h4>
              <p className="text-primary-foreground/90 text-sm leading-relaxed">
                We typically respond to inquiries within 24 hours. For urgent bookings, 
                please call us directly at{" "}
                <a href="tel:+254700000000" className="underline">
                  +254 700 000 000
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
