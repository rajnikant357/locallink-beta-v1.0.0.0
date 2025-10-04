import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Star, Clock, Zap, CheckCircle2, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface Provider {
  id: string;
  name: string;
  rating: number;
  distance: string;
  eta: string;
  status: "responding" | "accepted" | "rejected";
  responseTime: number;
}

interface LiveResponseScreenProps {
  category: string;
  onProviderSelect: (provider: Provider) => void;
  onCancel: () => void;
}

const LiveResponseScreen = ({ category, onProviderSelect, onCancel }: LiveResponseScreenProps) => {
  const [countdown, setCountdown] = useState(30);
  const [providers, setProviders] = useState<Provider[]>([]);
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);

  // Mock providers responding over time
  useEffect(() => {
    const mockProviders: Provider[] = [
      {
        id: "1",
        name: "Rajesh Kumar",
        rating: 4.8,
        distance: "0.8 km",
        eta: "5-7 min",
        status: "responding",
        responseTime: 3,
      },
      {
        id: "2",
        name: "Amit Sharma",
        rating: 4.9,
        distance: "1.2 km",
        eta: "8-10 min",
        status: "responding",
        responseTime: 7,
      },
      {
        id: "3",
        name: "Vikram Singh",
        rating: 4.7,
        distance: "1.5 km",
        eta: "10-12 min",
        status: "responding",
        responseTime: 12,
      },
    ];

    // Simulate providers responding at different times
    mockProviders.forEach((provider) => {
      setTimeout(() => {
        setProviders((prev) => [...prev, { ...provider, status: "accepted" }]);
      }, provider.responseTime * 1000);
    });
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSelectProvider = (provider: Provider) => {
    setSelectedProvider(provider);
    onProviderSelect(provider);
  };

  const acceptedProviders = providers.filter((p) => p.status === "accepted");
  const progressValue = ((30 - countdown) / 30) * 100;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-orange-500 animate-pulse" />
              Finding Available {category}s
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={onCancel}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="space-y-2 mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                {acceptedProviders.length} provider{acceptedProviders.length !== 1 ? "s" : ""} responding
              </span>
              <span className="font-mono font-semibold text-orange-500">
                {countdown}s remaining
              </span>
            </div>
            <Progress value={progressValue} className="h-2" />
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {acceptedProviders.length === 0 ? (
            <div className="text-center py-12">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-ping" />
                  <Zap className="h-16 w-16 text-orange-500 relative" />
                </div>
              </div>
              <p className="text-lg font-medium">Broadcasting to nearby providers...</p>
              <p className="text-sm text-muted-foreground mt-2">
                We're notifying all available {category}s in your area
              </p>
            </div>
          ) : (
            <>
              {!selectedProvider && (
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    ✓ Great! Providers are accepting your request
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                    Select the best match or we'll auto-assign the nearest one when timer ends
                  </p>
                </div>
              )}

              {acceptedProviders.map((provider) => (
                <Card
                  key={provider.id}
                  className={`transition-all ${
                    selectedProvider?.id === provider.id
                      ? "border-2 border-green-500 bg-green-50 dark:bg-green-950/20"
                      : "hover:shadow-md cursor-pointer"
                  }`}
                  onClick={() => !selectedProvider && handleSelectProvider(provider)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {provider.name.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{provider.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{provider.rating}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">•</span>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              {provider.distance}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        {selectedProvider?.id === provider.id ? (
                          <Badge className="bg-green-500">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Selected
                          </Badge>
                        ) : (
                          <>
                            <Badge variant="outline" className="mb-1">
                              <Clock className="h-3 w-3 mr-1" />
                              {provider.eta}
                            </Badge>
                            <p className="text-xs text-muted-foreground">ETA</p>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {selectedProvider && (
                <div className="flex gap-2 pt-4">
                  <Button className="flex-1 bg-green-500 hover:bg-green-600" size="lg">
                    Confirm Booking with {selectedProvider.name}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedProvider(null)}
                  >
                    Change
                  </Button>
                </div>
              )}
            </>
          )}

          {countdown === 0 && acceptedProviders.length > 0 && !selectedProvider && (
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Time's up! Auto-selecting best match...
              </p>
              <Button
                className="bg-green-500 hover:bg-green-600"
                onClick={() => handleSelectProvider(acceptedProviders[0])}
              >
                Confirm {acceptedProviders[0].name} (Nearest & Highest Rated)
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveResponseScreen;
