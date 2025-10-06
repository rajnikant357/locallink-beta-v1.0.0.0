import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNavbar from "@/components/BottomNavbar";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, User } from "lucide-react";

const MyBookings = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth");
    }
  }, [isAuthenticated, navigate]);

  // Mock bookings data - in production, this would come from backend
  const bookings = [
    {
      id: 1,
      service: "Plumbing Service",
      provider: "John's Plumbing",
      date: "2025-10-08",
      time: "10:00 AM",
      location: "123 Main St",
      status: "confirmed",
    },
    {
      id: 2,
      service: "Electrician",
      provider: "Quick Fix Electrical",
      date: "2025-10-10",
      time: "2:00 PM",
      location: "456 Oak Ave",
      status: "pending",
    },
    {
      id: 3,
      service: "House Cleaning",
      provider: "Sparkle Clean Co",
      date: "2025-10-05",
      time: "9:00 AM",
      location: "789 Pine Rd",
      status: "completed",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500";
      case "pending":
        return "bg-yellow-500";
      case "completed":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">My Bookings</h1>
            <p className="text-muted-foreground">View and manage your service bookings</p>
          </div>

          {bookings.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Calendar className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h2 className="text-2xl font-semibold mb-2">No bookings yet</h2>
                <p className="text-muted-foreground mb-6">Start booking services to see them here</p>
                <Button onClick={() => navigate("/categories")}>Browse Categories</Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {bookings.map((booking) => (
                <Card key={booking.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{booking.service}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-2">
                          <User className="h-4 w-4" />
                          {booking.provider}
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(booking.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{booking.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{booking.location}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm">View Details</Button>
                      {booking.status === "confirmed" && (
                        <Button variant="outline" size="sm">Cancel</Button>
                      )}
                      {booking.status === "completed" && (
                        <Button size="sm">Book Again</Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <BottomNavbar />
    </div>
  );
};

export default MyBookings;
