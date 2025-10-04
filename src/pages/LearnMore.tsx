import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Shield, Clock, Star, ArrowRight, CheckCircle2 } from "lucide-react";

const LearnMore = () => {
  const benefits = [
    {
      icon: Users,
      title: "Verified Professionals",
      description: "All service providers are verified with background checks and skill assessments",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Multiple payment options with full transaction security and buyer protection",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you with any queries or issues",
    },
    {
      icon: Star,
      title: "Quality Guaranteed",
      description: "Read genuine reviews and ratings from real customers before booking",
    },
  ];

  const features = [
    "Easy booking process in just 3 steps",
    "Real-time availability and instant confirmation",
    "Flexible scheduling to match your convenience",
    "Transparent pricing with no hidden charges",
    "In-app messaging to communicate with providers",
    "Service history and digital receipts",
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Choose Your Service",
      description: "Browse through our wide range of service categories and select what you need",
    },
    {
      step: "2",
      title: "Select a Provider",
      description: "View profiles, ratings, and reviews to choose the best professional for your job",
    },
    {
      step: "3",
      title: "Book & Pay",
      description: "Schedule your service, make secure payment, and get instant confirmation",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
  <section className="py-20 bg-gradient-to-r from-[#467ae9ff] to-[#1d4ed8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Your Trusted Platform for Local Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with verified professionals in your area for all your home and business service needs
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose LocalLink?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How LocalLink Works</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust LocalLink for their service needs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" variant="secondary">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/register-provider">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Become a Provider
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LearnMore;
