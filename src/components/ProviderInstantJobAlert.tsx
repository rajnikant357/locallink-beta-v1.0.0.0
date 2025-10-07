import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, MapPin, Clock, DollarSign, X, ChevronRight, ChevronLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface InstantJobRequest {
  id: string;
  service: string;
  location: string;
  timeFrame: string;
  budget?: string;
  notes?: string;
  distance: string;
}

interface ProviderInstantJobAlertProps {
  request: InstantJobRequest;
  onAccept: () => void;
  onReject: () => void;
  timeout?: number;
}

const ProviderInstantJobAlert = ({
  request,
  onAccept,
  onReject,
  timeout = 30,
}: ProviderInstantJobAlertProps) => {
  const [countdown, setCountdown] = useState(timeout);
  const [slidePosition, setSlidePosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onReject();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onReject]);

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    const maxSlide = 200;
    setSlidePosition(Math.max(-maxSlide, Math.min(maxSlide, diff)));
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (slidePosition > 150) {
      onAccept();
    } else if (slidePosition < -150) {
      onReject();
    }
    setSlidePosition(0);
  };

  const progressValue = ((timeout - countdown) / timeout) * 100;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="w-full max-w-md border-2 border-orange-500 shadow-2xl animate-scale-in">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-orange-500 rounded-full animate-pulse">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">⚡ Urgent Request</h3>
                <p className="text-sm text-muted-foreground">
                  {countdown}s to respond
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onReject}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <Progress value={progressValue} className="h-2" />

          <div className="space-y-3 bg-muted/50 rounded-lg p-4">
            <div>
              <h4 className="font-semibold text-lg">{request.service}</h4>
              <Badge variant="outline" className="mt-1">Instant Job</Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{request.location}</span>
                <Badge variant="secondary" className="ml-auto">
                  {request.distance}
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Needed within {request.timeFrame} minutes</span>
              </div>

              {request.budget && (
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span>Budget: {request.budget}</span>
                </div>
              )}

              {request.notes && (
                <div className="mt-2 p-2 bg-background rounded text-sm">
                  <p className="text-muted-foreground">"{request.notes}"</p>
                </div>
              )}
            </div>
          </div>

          {/* Mobile: Show slider only */}
          {isMobile ? (
            <div className="relative">
              <div className="bg-muted rounded-full p-1 relative overflow-hidden h-16 flex items-center justify-between">
                <span className={`font-semibold px-6 ${slidePosition < -100 ? "text-red-600" : "text-muted-foreground"}`}>Slide to Reject</span>
                <div
                  className={`h-14 w-14 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing transition-colors ${
                    slidePosition > 100
                      ? "bg-green-500"
                      : slidePosition < -100
                      ? "bg-red-500"
                      : "bg-primary"
                  }`}
                  style={{
                    transform: `translateX(${slidePosition}px)`,
                    position: "relative",
                    zIndex: 10,
                  }}
                  onMouseDown={handleTouchStart}
                  onMouseMove={handleTouchMove}
                  onMouseUp={handleTouchEnd}
                  onMouseLeave={handleTouchEnd}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className={`font-semibold px-6 ${slidePosition > 100 ? "text-green-600" : "text-muted-foreground"}`}>Slide to Accept</span>
              </div>
            </div>
          ) : (
            // Desktop: Show buttons only
            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                className="flex-1 border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-500"
                onClick={onReject}
              >
                Reject
              </Button>
              <Button
                className="flex-1 bg-green-500 hover:bg-green-600"
                onClick={onAccept}
              >
                Accept Job
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProviderInstantJobAlert;
