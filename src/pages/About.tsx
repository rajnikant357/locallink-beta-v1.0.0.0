import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Users, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        {/* Hero */}
  <section className="bg-gradient-to-r from-[#467ae9ff] to-[#1d4ed8] text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About LocalLink</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Connecting communities with trusted local service providers
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                LocalLink was founded with a simple mission: to make it easy for people to find and connect 
                with trusted local service providers. We believe that quality services should be accessible 
                to everyone, and that skilled professionals deserve a platform to grow their business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-muted-foreground text-sm">
                    To become the most trusted service marketplace in every local community
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">200+ Providers</h3>
                  <p className="text-muted-foreground text-sm">
                    Verified professionals ready to serve you
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">5000+ Jobs</h3>
                  <p className="text-muted-foreground text-sm">
                    Successfully completed with satisfaction
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">4.7 Rating</h3>
                  <p className="text-muted-foreground text-sm">
                    Average customer satisfaction score
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  LocalLink started in 2023 in Sikandarpur, Ballia, when our founder struggled to find 
                  a reliable electrician for a home repair. After hours of searching and making countless 
                  phone calls, it became clear that there was a need for a better way to connect with 
                  local service providers.
                </p>
                <p>
                  We built LocalLink to solve this problem - creating a platform where people can easily 
                  find, compare, and book trusted service providers in their area. Today, we're proud to 
                  serve thousands of customers and support hundreds of local professionals in growing their 
                  businesses.
                </p>
                <p>
                  Our commitment to quality, transparency, and community drives everything we do. We carefully 
                  verify each service provider, ensure fair pricing, and continuously improve our platform 
                  based on customer feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Trust</h3>
                <p className="text-muted-foreground">
                  We verify every provider and ensure transparent pricing and authentic reviews
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-muted-foreground">
                  Supporting local businesses and bringing communities together
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  Committed to providing the best experience for customers and providers
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
