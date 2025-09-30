import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Star, Clock, MapPin, MessageSquare, TrendingUp, DollarSign } from "lucide-react";

const Dashboard = () => {
  const [userType] = useState<"customer" | "provider">("customer");

  const bookings = [
    {
      id: 1,
      provider: "Rajesh Kumar",
      service: "Electrician",
      date: "2025-02-15",
      time: "10:00 AM",
      status: "upcoming",
      location: "Sikandarpur",
      price: "₹500",
    },
    {
      id: 2,
      provider: "Amit Singh",
      service: "Carpenter",
      date: "2025-02-10",
      time: "2:00 PM",
      status: "completed",
      location: "Ballia",
      price: "₹600",
    },
  ];

  const reviews = [
    {
      id: 1,
      provider: "Amit Singh",
      service: "Carpenter",
      rating: 5,
      comment: "Excellent work! Very professional and timely.",
      date: "2025-02-11",
    },
  ];

  const stats = [
    { label: "Total Bookings", value: "12", icon: Calendar, color: "text-primary" },
    { label: "Completed", value: "10", icon: Clock, color: "text-green-500" },
    { label: "Reviews Given", value: "8", icon: Star, color: "text-yellow-500" },
    { label: "Total Spent", value: "₹5,400", icon: DollarSign, color: "text-blue-500" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">My Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, John Doe</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 bg-muted rounded-full flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <Tabs defaultValue="bookings" className="space-y-6">
            <TabsList>
              <TabsTrigger value="bookings">My Bookings</TabsTrigger>
              <TabsTrigger value="reviews">My Reviews</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
            </TabsList>

            <TabsContent value="bookings" className="space-y-4">
              {bookings.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">{booking.provider}</h3>
                            <p className="text-muted-foreground">{booking.service}</p>
                          </div>
                          <Badge 
                            variant={booking.status === "completed" ? "default" : "secondary"}
                            className={booking.status === "upcoming" ? "bg-primary" : ""}
                          >
                            {booking.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {booking.date}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {booking.time}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {booking.location}
                          </div>
                        </div>

                        <p className="font-semibold mt-3">{booking.price}</p>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                        {booking.status === "completed" && (
                          <Button>Leave Review</Button>
                        )}
                        {booking.status === "upcoming" && (
                          <Button variant="destructive">Cancel</Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {bookings.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <p className="text-muted-foreground mb-4">You don't have any bookings yet</p>
                    <Link to="/categories">
                      <Button>Browse Services</Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="reviews" className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{review.provider}</h3>
                        <p className="text-sm text-muted-foreground">{review.service}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-2">{review.comment}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </CardContent>
                </Card>
              ))}

              {reviews.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <p className="text-muted-foreground">You haven't left any reviews yet</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="favorites">
              <Card>
                <CardContent className="p-12 text-center">
                  <p className="text-muted-foreground mb-4">You don't have any favorite providers yet</p>
                  <Link to="/providers">
                    <Button>Browse Providers</Button>
                  </Link>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
