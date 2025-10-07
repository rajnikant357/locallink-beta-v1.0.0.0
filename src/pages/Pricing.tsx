import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "List your services",
        "Basic profile page",
        "Up to 10 bookings/month",
        "Email notifications",
        "Customer reviews",
      ],
      limitations: [
        "No priority listing",
        "No analytics",
        "Limited support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "₹499",
      period: "per month",
      description: "Best for growing businesses",
      features: [
        "Everything in Free",
        "Unlimited bookings",
        "Priority listing in search",
        "Advanced analytics",
        "24/7 priority support",
        "Featured badge",
        "Custom availability schedule",
        "Direct messaging",
      ],
      limitations: [],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Business",
      price: "₹999",
      period: "per month",
      description: "For established businesses",
      features: [
        "Everything in Professional",
        "Top search placement",
        "Promotional campaigns",
        "Team management (up to 5)",
        "API access",
        "Custom branding",
        "Dedicated account manager",
        "Performance reports",
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pb-24 md:pb-0">
        {/* Hero */}
  <section className="bg-gradient-to-r from-[#467ae9ff] to-[#1d4ed8] text-primary-foreground py-10 md:py-16">
          <div className="container mx-auto px-3 md:px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Simple, Transparent Pricing</h1>
            <p className="text-base md:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
              Choose the plan that's right for your business
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-8 md:py-16 bg-background">
          <div className="container mx-auto px-3 md:px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
              {plans.map((plan) => (
                <Card 
                  key={plan.name} 
                  className={`relative ${plan.popular ? 'border-primary shadow-lg md:scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-3 md:px-4 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardContent className="p-5 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-3 md:mb-4 text-sm md:text-base">{plan.description}</p>
                    
                    <div className="mb-4 md:mb-6">
                      <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground text-sm md:text-base">/{plan.period}</span>
                    </div>

                    <Button 
                      className="w-full mb-4 md:mb-6 h-9 md:h-10 text-sm md:text-base" 
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>

                    <div className="space-y-2 md:space-y-3">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs md:text-sm">{feature}</span>
                        </div>
                      ))}
                      {plan.limitations.map((limitation) => (
                        <div key={limitation} className="flex items-start gap-2">
                          <X className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-xs md:text-sm text-muted-foreground">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-8 md:py-16 bg-muted/30">
          <div className="container mx-auto px-3 md:px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-3 md:space-y-6">
              <Card>
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Can I change plans later?</h3>
                  <p className="text-muted-foreground text-xs md:text-base">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Is there a free trial?</h3>
                  <p className="text-muted-foreground text-xs md:text-base">
                    Yes, Professional and Business plans come with a 14-day free trial. No credit card required.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">What payment methods do you accept?</h3>
                  <p className="text-muted-foreground text-xs md:text-base">
                    We accept UPI, credit/debit cards, net banking, and other popular payment methods.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Can I cancel anytime?</h3>
                  <p className="text-muted-foreground text-xs md:text-base">
                    Yes, you can cancel your subscription at any time. Your account will remain active until the end of the billing period.
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

export default Pricing;
