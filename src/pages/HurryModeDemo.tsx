import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProviderInstantJobAlert from "@/components/ProviderInstantJobAlert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, User, Smartphone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const HurryModeDemo = () => {
  const [showProviderAlert, setShowProviderAlert] = useState(false);

  const mockRequest = {
    id: "1",
    service: "Electrician",
    location: "Sector 29, Gurgaon",
    timeFrame: "15",
    budget: "₹500-₹1000",
    notes: "Power outage in living room, need urgent help!",
    distance: "0.8 km",
  };

  const handleAccept = () => {
    toast({
      title: "Job Accepted!",
      description: "Customer details have been shared. Navigate to location.",
    });
    setShowProviderAlert(false);
  };

  const handleReject = () => {
    toast({
      title: "Job Rejected",
      description: "Looking for other available providers...",
      variant: "destructive",
    });
    setShowProviderAlert(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Zap className="h-10 w-10 text-orange-500" />
              Hurry Mode
            </h1>
            <p className="text-lg text-muted-foreground">
              Experience the instant service matching system
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Customer Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  As a customer, you can activate Hurry Mode when you need urgent service.
                  The system will instantly broadcast your request to nearby providers.
                </p>
                <Button className="w-full" asChild>
                  <a href="/category/electrician">
                    Try Hurry Mode (Demo)
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Provider Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  As a provider with Instant Mode enabled, you'll receive instant notifications
                  for urgent jobs. You have 30 seconds to accept or reject each request.
                </p>
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  onClick={() => setShowProviderAlert(true)}
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Instant Job Alert(Demo)
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle>How Hurry Mode Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm">
                    1
                  </span>
                  Customer Activates Hurry Mode
                </h3>
                <p className="text-sm text-muted-foreground ml-8">
                  Toggle Hurry Mode before searching and set urgency details (timeframe, budget, notes).
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm">
                    2
                  </span>
                  System Broadcasts Request
                </h3>
                <p className="text-sm text-muted-foreground ml-8">
                  The request is instantly sent to all nearby providers who have Instant Mode enabled.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm">
                    3
                  </span>
                  Providers Respond
                </h3>
                <p className="text-sm text-muted-foreground ml-8">
                  Providers receive a popup notification with a 30-second countdown. They can slide to
                  accept or reject, or use the buttons.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm">
                    4
                  </span>
                  Live Response Screen
                </h3>
                <p className="text-sm text-muted-foreground ml-8">
                  Customer sees providers responding in real-time. They can select the best match or
                  let the system auto-assign when the timer ends.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm">
                    5
                  </span>
                  Instant Match
                </h3>
                <p className="text-sm text-muted-foreground ml-8">
                  First provider to accept (or best match if multiple accept) gets the job. Contact
                  details are instantly shared.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">
              ✓ Key Features
            </h3>
            <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
              <li>• Real-time matching</li>
              <li>• 30-second response timer for providers</li>
              <li>• Live response tracking for customers</li>
              <li>• Slide-to-accept/reject interface for providers</li>
              <li>• Category-specific broadcast (e.g:- only Electricians get Electrician requests)</li>
              <li>• Location-based matching (configurable radius)</li>
              <li>• Fair first-come-first-serve or best-match assignment</li>
            </ul>
          </div>
        </div>
      </div>

      {showProviderAlert && (
        <ProviderInstantJobAlert
          request={mockRequest}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      )}

      <Footer />
    </div>
  );
};

export default HurryModeDemo;
