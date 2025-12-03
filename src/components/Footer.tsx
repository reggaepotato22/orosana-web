import { Bird, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import starlingBird from "@/assets/starling-bird.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { label: "Accommodations", to: "/accommodations" },
    { label: "Experiences", to: "/experiences" },
    { label: "Gallery", to: "/gallery" },
    { label: "Stories", to: "/stories" },
    { label: "Book Now", to: "/booking" },
  ];

  const stayLinks = [
    { label: "The Farmhouse", to: "/accommodations" },
    { label: "Stone Cottage", to: "/accommodations" },
    { label: "Safari Campsites", to: "/accommodations" },
    { label: "Group Bookings", to: "/booking" },
    { label: "Special Events", to: "/contact" },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={starlingBird} alt="Orosana Logo" className="w-10 h-10 object-contain" />
              <div>
                <h3 className="font-serif text-xl font-bold">Orosana</h3>
                <p className="text-xs tracking-widest uppercase text-background/60">Guest Farm</p>
              </div>
            </Link>
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
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-background/70 hover:text-ochre transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay */}
          <div>
            <h4 className="font-serif text-lg mb-4">Our Stays</h4>
            <ul className="space-y-2">
              {stayLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-background/70 hover:text-ochre transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
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
                  Ngong Hills Road, Near Rift Valley
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
                  +254 700 000 000
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
            <Link to="/contact" className="hover:text-ochre transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-ochre transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-ochre transition-colors">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
