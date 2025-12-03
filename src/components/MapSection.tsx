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
              src="https://maps.app.goo.gl/UC6MkABuMgp79ios7"
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
                    +254 113910610
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
