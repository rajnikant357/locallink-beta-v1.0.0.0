import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ChatbotButton from "@/components/ChatbotButton";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Star, Clock, MapPin, MessageSquare, Wallet, Heart, Gift, TrendingUp, CreditCard, LogOut, Search, Filter } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";
import ProfilePicture from "@/components/dashboard/ProfilePicture";

const UserDashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
    navigate("/");
  };

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

  const favorites = [
    { id: 1, name: "Rajesh Kumar", service: "Electrician", rating: 4.8, location: "Sikandarpur" },
    { id: 2, name: "Priya Sharma", service: "House Cleaning", rating: 4.9, location: "MG Road" },
  ];

  const offers = [
    { id: 1, title: "20% Off on First Booking", code: "FIRST20", expires: "2025-03-01" },
    { id: 2, title: "Refer & Earn ₹100", code: "REFER100", expires: "2025-04-01" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="flex items-center gap-4">
            <ProfilePicture name={user?.name || "User"} type="customer" />
            <div>
              <h1 className="text-3xl font-bold">{user?.name || "User Dashboard"}</h1>
              <Badge className="mt-2">Customer Account</Badge>
            </div>
          </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Bookings</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Completed</p>
                    <p className="text-2xl font-bold">10</p>
                  </div>
                  <Clock className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Wallet Balance</p>
                    <p className="text-2xl font-bold">₹250</p>
                  </div>
                  <Wallet className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Rewards Points</p>
                    <p className="text-2xl font-bold">420</p>
                  </div>
                  <Gift className="h-8 w-8 text-yellow-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:grid-cols-7">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="search">Search</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="offers">Offers</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <p className="font-medium">Upcoming Booking</p>
                        <p className="text-sm text-muted-foreground">Electrician - Tomorrow at 10:00 AM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                      <Gift className="h-5 w-5 text-yellow-500" />
                      <div className="flex-1">
                        <p className="font-medium">New Offer Available</p>
                        <p className="text-sm text-muted-foreground">Get 20% off on your next booking</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["Plumbing", "AC Repair", "Painting"].map((service) => (
                      <div key={service} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <h3 className="font-semibold mb-2">{service}</h3>
                        <p className="text-sm text-muted-foreground mb-3">Professional service providers near you</p>
                        <Button size="sm" className="w-full">Explore</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Bookings Tab */}
            <TabsContent value="bookings" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">My Bookings</h2>
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Find Services
                </Button>
              </div>
              
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
                          <Badge variant={booking.status === "completed" ? "default" : "secondary"}>
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
            </TabsContent>

            {/* Search Tab */}
            <TabsContent value="search" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Find Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Search for services..."
                      className="flex-1 px-4 py-2 border rounded-md"
                    />
                    <Button>
                      <Search className="h-4 w-4 mr-2" />
                      Search
                    </Button>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Price Range
                    </Button>
                    <Button variant="outline" size="sm">Distance</Button>
                    <Button variant="outline" size="sm">Rating</Button>
                    <Button variant="outline" size="sm">Availability</Button>
                  </div>
                  <Link to="/categories">
                    <Button className="w-full">Browse All Categories</Button>
                  </Link>
                </CardContent>
              </Card>
            </TabsContent>


            {/* Payments Tab */}
            <TabsContent value="payments" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Wallet</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <p className="text-sm text-muted-foreground">Available Balance</p>
                        <p className="text-2xl font-bold">₹250</p>
                      </div>
                      <Button>Add Money</Button>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Recent Transactions</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">Payment to Amit Singh</p>
                            <p className="text-sm text-muted-foreground">Feb 10, 2025</p>
                          </div>
                          <p className="font-semibold text-red-500">-₹600</p>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">Cashback Received</p>
                            <p className="text-sm text-muted-foreground">Feb 11, 2025</p>
                          </div>
                          <p className="font-semibold text-green-500">+₹50</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Add Payment Method
                    </Button>
                    <Link to="/payment-methods">
                      <Button variant="ghost" className="w-full">View All Payment Options</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Favorites Tab */}
            <TabsContent value="favorites" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">My Favorites</h2>
              </div>
              
              {favorites.map((fav) => (
                <Card key={fav.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{fav.name}</h3>
                        <p className="text-muted-foreground">{fav.service}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{fav.rating}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {fav.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button>Book Now</Button>
                        <Button variant="outline" size="icon">
                          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Offers Tab */}
            <TabsContent value="offers" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Offers & Rewards</h2>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Reward Points</p>
                  <p className="text-2xl font-bold text-primary">420</p>
                </div>
              </div>

              {offers.map((offer) => (
                <Card key={offer.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Gift className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{offer.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Code: <span className="font-mono font-bold">{offer.code}</span>
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Expires: {offer.expires}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline">Apply</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          {/* Sign Out Button */}
          <div className="mt-8 flex justify-end">
            <Button 
              onClick={handleSignOut} 
              variant="default" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 w-auto min-w-0"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
        <>
          <Footer />
          <ChatbotButton />
        </>
  </div>
  );
};

export default UserDashboard;
