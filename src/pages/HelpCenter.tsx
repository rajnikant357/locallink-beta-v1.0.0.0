import Navbar from "@/components/Navbar";
import ChatbotButton from "@/components/ChatbotButton";
import Footer from "@/components/Footer";
import { Search, Book, Users, CreditCard, MessageSquare, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HelpCenter = () => {
  const topics = [
    { icon: Book, title: "Getting Started", description: "Learn the basics of using LocalLink" },
    { icon: Users, title: "Finding Providers", description: "How to search and compare service providers" },
    { icon: CreditCard, title: "Payments & Pricing", description: "Understanding costs and payment methods" },
    { icon: MessageSquare, title: "Communication", description: "How to contact and book providers" },
    { icon: Shield, title: "Safety & Trust", description: "Our verification and safety measures" },
    { icon: Search, title: "Account Management", description: "Managing your profile and settings" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help you?</h1>
              <p className="text-lg mb-8 opacity-90">
                Search our help center or browse topics below
              </p>
              
              <div className="bg-white rounded-lg p-2 flex items-center">
                <Search className="h-5 w-5 text-muted-foreground mx-3" />
                <Input 
                  placeholder="Search for help..." 
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground"
                />
                <Button className="ml-2">Search</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Browse Help Topics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {topics.map((topic) => (
                <Card key={topic.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <topic.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                    <p className="text-muted-foreground">{topic.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Articles</h2>
            
            <div className="max-w-3xl mx-auto space-y-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How to find the right service provider?</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn tips and tricks for finding the perfect match for your needs
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Understanding provider ratings and reviews</h3>
                  <p className="text-sm text-muted-foreground">
                    How our rating system works and what to look for in reviews
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Booking and scheduling guidelines</h3>
                  <p className="text-sm text-muted-foreground">
                    Step-by-step guide to booking services on LocalLink
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Safety tips for hiring service providers</h3>
                  <p className="text-sm text-muted-foreground">
                    Best practices for ensuring safe and successful service experiences
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
                <p className="mb-6 opacity-90">
                  Can't find what you're looking for? Our support team is here to help
                </p>
                <div className="flex gap-4 justify-center">
                  <Link to="/contact">
                    <Button variant="secondary" size="lg">Contact Support</Button>
                  </Link>
                  <Link to="/faqs">
                    <Button variant="secondary" size="lg">View FAQs</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
      {/* Chatbot Button only for HelpCenter page */}
      {typeof window !== "undefined" && window.innerWidth < 768 && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 10 }}>
          <ChatbotButton />
        </div>
      )}
    </div>
  );
};

export default HelpCenter;
