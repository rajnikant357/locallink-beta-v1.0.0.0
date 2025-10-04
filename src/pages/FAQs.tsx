import Navbar from "@/components/Navbar";
import ChatbotButton from "@/components/ChatbotButton";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about LocalLink and our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How does LocalLink work?
                </AccordionTrigger>
                <AccordionContent>
                  LocalLink connects you with verified local service providers. Simply search for the service you need, 
                  browse through available providers, compare their profiles and ratings, and book the one that best fits 
                  your requirements. You can contact providers directly through our platform.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Are all service providers verified?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, all service providers on LocalLink go through a verification process. We check their credentials, 
                  experience, and conduct background checks to ensure you get safe and reliable service. However, we 
                  recommend reading reviews and ratings before making your final decision.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How do I book a service provider?
                </AccordionTrigger>
                <AccordionContent>
                  After finding a provider you like, click on "Book Now" or "Contact" button on their profile. You can 
                  either book instantly if they're available or schedule an appointment for later. You'll be able to 
                  communicate directly with the provider to discuss your requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What payment methods are accepted?
                </AccordionTrigger>
                <AccordionContent>
                  Payment terms are arranged directly between you and the service provider. Most providers accept cash, 
                  UPI, and bank transfers. We recommend discussing payment terms before the service begins to avoid any 
                  confusion.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Can I cancel or reschedule a booking?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can cancel or reschedule bookings by contacting the service provider directly. We recommend 
                  giving as much notice as possible. Cancellation policies may vary by provider, so please check with 
                  them regarding any cancellation fees.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How do I become a service provider on LocalLink?
                </AccordionTrigger>
                <AccordionContent>
                  To register as a service provider, click on "Register as Provider" in the footer or navigation menu. 
                  Fill out the registration form with your details, credentials, and experience. Our team will review 
                  your application and verify your information. Once approved, you can start receiving bookings.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What if I'm not satisfied with the service?
                </AccordionTrigger>
                <AccordionContent>
                  If you're not satisfied with a service, please contact us immediately at support@locallink.com. 
                  We'll work with you and the provider to resolve the issue. You can also leave a review to help 
                  other customers make informed decisions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Are there any charges for using LocalLink?
                </AccordionTrigger>
                <AccordionContent>
                  LocalLink is free for customers to use. There are no booking fees or hidden charges. You only pay 
                  the service provider for their work according to the agreed price. Service providers pay a small 
                  subscription fee to list their services on our platform.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What areas does LocalLink serve?
                </AccordionTrigger>
                <AccordionContent>
                  LocalLink currently operates in Sikandarpur, Ballia, and surrounding areas in Uttar Pradesh. We're 
                  continuously expanding to new locations. If we're not in your area yet, register your interest and 
                  we'll notify you when we launch in your location.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How can I leave a review?
                </AccordionTrigger>
                <AccordionContent>
                  After completing a service, you can leave a review by visiting the provider's profile and clicking 
                  on "Leave a Review". Your honest feedback helps other customers make better decisions and helps 
                  providers improve their services.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <Footer />
      {/* Chatbot Button only for FAQs page */}
      {typeof window !== "undefined" && window.innerWidth < 768 && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 10 }}>
          <ChatbotButton />
        </div>
      )}
    </div>
  );
};

export default FAQs;
