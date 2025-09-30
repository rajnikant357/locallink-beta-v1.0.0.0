import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, MessageSquare, Star, CheckCircle, AlertCircle } from "lucide-react";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "booking",
      icon: Calendar,
      title: "Booking Confirmed",
      message: "Your booking with Rajesh Kumar has been confirmed for Feb 15, 2025 at 10:00 AM",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "message",
      icon: MessageSquare,
      title: "New Message",
      message: "Amit Singh sent you a message regarding your booking",
      time: "5 hours ago",
      read: false,
    },
    {
      id: 3,
      type: "review",
      icon: Star,
      title: "Review Request",
      message: "Please rate your experience with Sunil Yadav",
      time: "1 day ago",
      read: true,
    },
    {
      id: 4,
      type: "success",
      icon: CheckCircle,
      title: "Service Completed",
      message: "Your service with Amit Singh has been marked as completed",
      time: "2 days ago",
      read: true,
    },
    {
      id: 5,
      type: "reminder",
      icon: AlertCircle,
      title: "Upcoming Booking",
      message: "Reminder: You have a booking tomorrow at 10:00 AM",
      time: "3 days ago",
      read: true,
    },
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case "booking": return "text-primary";
      case "message": return "text-blue-500";
      case "review": return "text-yellow-500";
      case "success": return "text-green-500";
      case "reminder": return "text-orange-500";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">Notifications</h1>
                <p className="text-muted-foreground">Stay updated with your bookings and messages</p>
              </div>
              <Button variant="outline">Mark all as read</Button>
            </div>

            <div className="space-y-4">
              {notifications.map((notification) => (
                <Card 
                  key={notification.id}
                  className={!notification.read ? "border-primary/50 bg-primary/5" : ""}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className={`w-12 h-12 flex-shrink-0 bg-muted rounded-full flex items-center justify-center ${getIconColor(notification.type)}`}>
                        <notification.icon className="h-6 w-6" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-semibold">{notification.title}</h3>
                          {!notification.read && (
                            <Badge variant="default" className="flex-shrink-0">New</Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">
                          {notification.message}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-muted-foreground">{notification.time}</p>
                          {!notification.read && (
                            <Button variant="ghost" size="sm">Mark as read</Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {notifications.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No notifications yet</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Notifications;
