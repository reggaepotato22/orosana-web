import { MapPin, Navigation, Clock, Phone } from "lucide-react";

const MapSection = () => {
  return (
    <section id="location" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Location
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Find Your Way
          </h2>
          <p className="text-muted-foreground text-lg">
            Nestled on the scenic side of Ngong Hills, overlooking the magnificent Great Rift Valley.
          </p>
          <div className="w-24 maasai-border mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-soft h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127636.72837686997!2d36.614055!3d-1.363064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0e64b2c85f37%3A0x5b50d0d3b0fd6e9!2sNgong%20Hills!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Orosana Guest Farm Location"
            />
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-2">Address</h4>
                  <p className="text-muted-foreground text-sm">
                    Orosana Guest Farm
                    <br />
                    Ngong Hills Road
                    <br />
                    Near Rift Valley Viewpoint
                    <br />
                    Kajiado County, Kenya
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Navigation size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-2">Getting Here</h4>
                  <p className="text-muted-foreground text-sm">
                    45 minutes from Nairobi CBD
                    <br />
                    30 minutes from Karen
                    <br />
                    Airport transfers available
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-2">Check Times</h4>
                  <p className="text-muted-foreground text-sm">
                    Check-in: 2:00 PM onwards
                    <br />
                    Check-out: 11:00 AM
                    <br />
                    Early/late arrangements available
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-2">Need Directions?</h4>
                  <p className="text-primary-foreground/90 text-sm mb-3">
                    Call us for detailed directions or to arrange pickup.
                  </p>
                  <a
                    href="tel:+254700000000"
                    className="text-ochre font-medium hover:underline"
                  >
                    +254 700 000 000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
