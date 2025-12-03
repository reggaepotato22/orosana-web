import { Mail, Phone, MessageCircle, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-earth text-earth-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <span className="text-ochre font-medium tracking-widest uppercase text-sm">
              Get in Touch
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-earth-foreground mt-4 mb-6">
              We Would Love to Hear From You
            </h2>
            <p className="text-earth-foreground/80 text-lg mb-8 leading-relaxed">
              Have questions about your stay, special requests, or just want to say hello? 
              Reach out to us anytime – we are here to help make your Orosana experience unforgettable.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              <a
                href="mailto:hello@orosanafarm.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-earth-foreground/5 hover:bg-earth-foreground/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-ochre/20 flex items-center justify-center">
                  <Mail size={20} className="text-ochre" />
                </div>
                <div>
                  <p className="text-sm text-earth-foreground/60">Email Us</p>
                  <p className="font-medium text-earth-foreground group-hover:text-ochre transition-colors">
                    hello@orosanafarm.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+254700000000"
                className="flex items-center gap-4 p-4 rounded-xl bg-earth-foreground/5 hover:bg-earth-foreground/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-ochre/20 flex items-center justify-center">
                  <Phone size={20} className="text-ochre" />
                </div>
                <div>
                  <p className="text-sm text-earth-foreground/60">Call Us</p>
                  <p className="font-medium text-earth-foreground group-hover:text-ochre transition-colors">
                    +254 700 000 000
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-earth-foreground/5 hover:bg-earth-foreground/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-ochre/20 flex items-center justify-center">
                  <MessageCircle size={20} className="text-ochre" />
                </div>
                <div>
                  <p className="text-sm text-earth-foreground/60">WhatsApp</p>
                  <p className="font-medium text-earth-foreground group-hover:text-ochre transition-colors">
                    Chat with us
                  </p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-earth-foreground/60 mb-4">Follow Our Journey</p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-earth-foreground/10 hover:bg-ochre flex items-center justify-center transition-colors group"
                >
                  <Instagram size={20} className="text-earth-foreground group-hover:text-earth" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-earth-foreground/10 hover:bg-ochre flex items-center justify-center transition-colors group"
                >
                  <Facebook size={20} className="text-earth-foreground group-hover:text-earth" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-earth-foreground/10 hover:bg-ochre flex items-center justify-center transition-colors group"
                >
                  <Twitter size={20} className="text-earth-foreground group-hover:text-earth" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-primary to-sunset rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-serif text-3xl text-primary-foreground mb-4">
              Ready for Your Adventure?
            </h3>
            <p className="text-primary-foreground/90 mb-8">
              Book your escape to Orosana Guest Farm and discover the magic of 
              Kenya's Ngong Hills. We cannot wait to welcome you.
            </p>
            <Button
              variant="heroOutline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              asChild
            >
              <a href="#booking">Reserve Your Stay</a>
            </Button>

            {/* Maasai Pattern */}
            <div className="w-32 maasai-border mx-auto mt-8 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
