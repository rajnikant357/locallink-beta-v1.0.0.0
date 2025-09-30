import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Users, Calendar, MessageSquare, Star, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How LocalLink Works</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Connecting you with trusted local service providers in just a few simple steps
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-primary">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <Search className="h-6 w-6 text-primary" />
                    Search for Services
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Browse through our service categories or use the search bar to find exactly what you need. 
                    Filter by location, availability, price range, and ratings to narrow down your options.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-primary">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    Compare Providers
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    View detailed profiles of service providers including their ratings, reviews, skills, 
                    experience, and pricing. Compare multiple providers to find the perfect match for your needs.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-primary">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-primary" />
                    Book & Schedule
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Book instantly if the provider is available now, or schedule an appointment for a 
                    convenient time. You can also request quotes and discuss your requirements before booking.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-primary">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    Connect Directly
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Communicate directly with the service provider through our platform. Discuss details, 
                    clarify requirements, and coordinate the service at your convenience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose LocalLink?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Verified Providers</h3>
                  <p className="text-muted-foreground">
                    All service providers are verified and background-checked for your safety and peace of mind
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Trusted Reviews</h3>
                  <p className="text-muted-foreground">
                    Read authentic reviews from real customers to make informed decisions
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
                  <p className="text-muted-foreground">
                    Book instantly or schedule for later with our flexible booking system
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorks;
