import { useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useLocation } from "react-router-dom";
import { MessageSquare } from "lucide-react";

const Messages = () => {
  const { user } = useAuth();
  const location = useLocation();

  // Scroll to top on open
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Responsive: full screen on mobile, floating card on desktop
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 md:bg-transparent md:static md:block"
      style={{ minHeight: '100vh' }}
    >
      <div
        className="w-full h-full md:w-[420px] md:h-auto md:rounded-2xl md:shadow-2xl bg-background flex items-center justify-center md:fixed md:top-8 md:right-8"
        style={{ maxWidth: '100vw', maxHeight: '100vh' }}
      >
        <Card className="w-full h-full md:w-[420px] md:h-auto md:rounded-2xl md:shadow-2xl bg-background">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              Messages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center min-h-[200px]">
              <MessageSquare className="h-12 w-12 mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">No messages yet</p>
              <p className="text-sm text-muted-foreground mt-2">
                Start a conversation with a service provider or client.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Messages;
