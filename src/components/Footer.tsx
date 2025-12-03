import { Bird, MapPin, Mail, Phone } from "lucide-react";
import starlingBird from "@/assets/starling-bird.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={starlingBird} alt="Orosana Logo" className="w-10 h-10 object-contain" />
              <div>
                <h3 className="font-serif text-xl font-bold">Orosana</h3>
                <p className="text-xs tracking-widest uppercase text-background/60">Guest Farm</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              An authentic African farm experience where the savanna meets 
              boutique hospitality, near the scenic Ngong Hills.
            </p>
            <div className="flex items-center gap-2 text-background/60 text-sm">
              <Bird size={16} className="text-ochre" />
              <span>Home of the Superb Starling</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Explore</h4>
            <ul className="space-y-2">
              {["Accommodations", "Experiences", "Gallery", "Stories", "Book Now"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-background/70 hover:text-ochre transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay */}
          <div>
            <h4 className="font-serif text-lg mb-4">Our Stays</h4>
            <ul className="space-y-2">
              {[
                "The Farmhouse",
                "Stone Cottage",
                "Safari Campsites",
                "Group Bookings",
                "Special Events",
              ].map((stay) => (
                <li key={stay}>
                  <a
                    href="#accommodations"
                    className="text-background/70 hover:text-ochre transition-colors text-sm"
                  >
                    {stay}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="text-ochre shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Olooshoibor, Near Rift Valley
                  <br />
                  Kajiado County, Kenya
                </span>
              </li>
              <li>
                <a
                  href="tel:+254700000000"
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-ochre transition-colors"
                >
                  <Phone size={16} className="text-ochre" />
                  +254 113910610
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@orosanafarm.com"
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-ochre transition-colors"
                >
                  <Mail size={16} className="text-ochre" />
                  hello@orosanafarm.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Maasai Divider */}
        <div className="maasai-border w-full mb-8 opacity-50" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>&copy; {currentYear} Orosana Guest Farm. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ochre transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-ochre transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-ochre transition-colors">
              Cancellation Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
