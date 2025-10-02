import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, Star, Clock, MapPin, MessageSquare, DollarSign, Users, 
  Briefcase, LogOut, TrendingUp, FileText, Settings, Award, 
  BarChart3, Target, Phone, Video, Image
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";
import ProfilePicture from "@/components/dashboard/ProfilePicture";

const ProviderDashboard = () => {
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

  const jobRequests = [
    {
      id: 1,
      client: "Neha Gupta",
      service: "Electrical Repair",
      date: "2025-02-18",
      time: "11:00 AM",
      location: "Sector 29, Gurgaon",
      budget: "₹800-1000",
      status: "pending",
      urgent: true,
    },
    {
      id: 2,
      client: "Vikram Mehta",
      service: "Home Wiring",
      date: "2025-02-20",
      time: "3:00 PM",
      location: "DLF Phase 3",
      budget: "₹2000-2500",
      status: "accepted",
      urgent: false,
    },
  ];

  const upcomingJobs = [
    {
      id: 1,
      client: "Vikram Mehta",
      service: "Home Wiring",
      date: "2025-02-20",
      time: "3:00 PM",
      location: "DLF Phase 3",
      payment: "₹2500",
    },
  ];

  const reviews = [
    {
      id: 1,
      client: "Amit Singh",
      rating: 5,
      comment: "Excellent work! Very professional and timely.",
      date: "2025-02-11",
      service: "Electrical Installation",
    },
    {
      id: 2,
      client: "Priya Sharma",
      rating: 4,
      comment: "Good service, arrived on time.",
      date: "2025-02-08",
      service: "Fan Repair",
    },
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Header with Profile */}
          <div className="mb-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <ProfilePicture name={user.name} editable />
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">Provider Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {user.name}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge>Service Provider</Badge>
                <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-2" />
                  Active
                </Badge>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Jobs</p>
                    <p className="text-2xl font-bold">47</p>
                    <p className="text-xs text-green-500 mt-1">+5 this month</p>
                  </div>
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Earned</p>
                    <p className="text-2xl font-bold">₹32,400</p>
                    <p className="text-xs text-green-500 mt-1">+₹3,200 this month</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Clients</p>
                    <p className="text-2xl font-bold">28</p>
                    <p className="text-xs text-blue-500 mt-1">4 new this week</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Average Rating</p>
                    <p className="text-2xl font-bold">4.8</p>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <Star className="h-8 w-8 text-yellow-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="requests">Requests</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                        <Target className="h-5 w-5 text-yellow-600" />
                        <div className="flex-1">
                          <p className="font-medium">1 Urgent Job Request</p>
                          <p className="text-sm text-muted-foreground">Neha Gupta - Electrical Repair</p>
                        </div>
                        <Button size="sm">View</Button>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                        <Clock className="h-5 w-5 text-primary" />
                        <div className="flex-1">
                          <p className="font-medium">Upcoming Job Tomorrow</p>
                          <p className="text-sm text-muted-foreground">Home Wiring - 3:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                        <Award className="h-5 w-5 text-green-500" />
                        <div className="flex-1">
                          <p className="font-medium">New Review Received</p>
                          <p className="text-sm text-muted-foreground">5 stars from Amit Singh</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>This Week's Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {upcomingJobs.map((job) => (
                        <div key={job.id} className="p-4 border rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <p className="font-medium">{job.service}</p>
                              <p className="text-sm text-muted-foreground">{job.client}</p>
                            </div>
                            <Badge>{job.payment}</Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {job.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {job.time}
                            </div>
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" className="w-full">View Full Calendar</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="outline" className="h-24 flex-col gap-2">
                      <Settings className="h-6 w-6" />
                      Update Profile
                    </Button>
                    <Button variant="outline" className="h-24 flex-col gap-2">
                      <FileText className="h-6 w-6" />
                      View Invoices
                    </Button>
                    <Button variant="outline" className="h-24 flex-col gap-2">
                      <TrendingUp className="h-6 w-6" />
                      Boost Visibility
                    </Button>
                    <Button variant="outline" className="h-24 flex-col gap-2">
                      <BarChart3 className="h-6 w-6" />
                      View Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Requests Tab */}
            <TabsContent value="requests" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Job Requests</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Filter</Button>
                  <Button variant="outline" size="sm">Sort</Button>
                </div>
              </div>

              {jobRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg">{request.service}</h3>
                            {request.urgent && (
                              <Badge variant="destructive">Urgent</Badge>
                            )}
                            <Badge variant="outline">{request.status}</Badge>
                          </div>
                          <p className="text-muted-foreground">Client: {request.client}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Budget</p>
                          <p className="font-semibold text-lg">{request.budget}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {request.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {request.time}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {request.location}
                        </div>
                      </div>

                      {request.status === "pending" && (
                        <div className="flex gap-2 pt-2">
                          <Button className="flex-1">Accept</Button>
                          <Button variant="outline" className="flex-1">Negotiate</Button>
                          <Button variant="destructive" className="flex-1">Reject</Button>
                        </div>
                      )}
                      {request.status === "accepted" && (
                        <div className="flex gap-2 pt-2">
                          <Button variant="outline">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Message Client
                          </Button>
                          <Button variant="outline">View Details</Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Bookings Tab */}
            <TabsContent value="bookings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Jobs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingJobs.map((job) => (
                      <div key={job.id} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold">{job.service}</h3>
                            <p className="text-sm text-muted-foreground">Client: {job.client}</p>
                          </div>
                          <Badge>{job.payment}</Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {job.date}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {job.time}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Phone className="h-4 w-4 mr-2" />
                            Call
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                          <Button variant="outline" size="sm">Reschedule</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Earnings Tab */}
            <TabsContent value="earnings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Earnings Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">This Month</p>
                      <p className="text-2xl font-bold">₹3,200</p>
                      <p className="text-xs text-green-500 mt-1">+15% from last month</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Total Earned</p>
                      <p className="text-2xl font-bold">₹32,400</p>
                      <p className="text-xs text-muted-foreground mt-1">47 completed jobs</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Pending Payout</p>
                      <p className="text-2xl font-bold">₹2,500</p>
                      <Button size="sm" className="mt-2">Request Payout</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Home Wiring - Vikram Mehta</p>
                        <p className="text-sm text-muted-foreground">Feb 20, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">+₹2,500</p>
                        <p className="text-xs text-muted-foreground">Commission: ₹250</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Fan Installation - Priya Sharma</p>
                        <p className="text-sm text-muted-foreground">Feb 08, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">+₹800</p>
                        <p className="text-xs text-muted-foreground">Commission: ₹80</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Invoice
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Messages Tab */}
            <TabsContent value="messages">
              <Card>
                <CardHeader>
                  <CardTitle>Client Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-medium">Vikram Mehta</p>
                          <p className="text-sm text-muted-foreground">Can we reschedule to 4 PM?</p>
                        </div>
                        <Badge variant="outline">2 min ago</Badge>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" variant="outline">
                          <Phone className="h-3 w-3 mr-1" />
                          Call
                        </Button>
                        <Button size="sm" variant="outline">
                          <Video className="h-3 w-3 mr-1" />
                          Video
                        </Button>
                        <Button size="sm">Reply</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Rating Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <p className="text-4xl font-bold">4.8</p>
                      <div className="flex items-center justify-center gap-1 my-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">42 reviews</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Most Praised For:</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Professional</Badge>
                        <Badge variant="outline">On Time</Badge>
                        <Badge variant="outline">Quality Work</Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Areas to Improve:</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Communication</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="font-semibold">{review.client}</p>
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
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                          <Button variant="ghost" size="sm">Reply</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Top Services</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Electrical Installation</span>
                          <Badge>18 jobs</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Repair Work</span>
                          <Badge>15 jobs</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Maintenance</span>
                          <Badge>14 jobs</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold">Client Demographics</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Gurgaon</span>
                          <span className="text-sm text-muted-foreground">45%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Delhi</span>
                          <span className="text-sm text-muted-foreground">30%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Noida</span>
                          <span className="text-sm text-muted-foreground">25%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Conversion Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Profile Views</p>
                      <p className="text-2xl font-bold">234</p>
                      <p className="text-xs text-green-500 mt-1">+12% this week</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Inquiries</p>
                      <p className="text-2xl font-bold">67</p>
                      <p className="text-xs text-blue-500 mt-1">28.6% conversion</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Bookings</p>
                      <p className="text-2xl font-bold">47</p>
                      <p className="text-xs text-green-500 mt-1">70.1% conversion</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Business Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Business Name</label>
                    <input
                      type="text"
                      defaultValue={user.name}
                      className="w-full mt-1 px-4 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Bio</label>
                    <textarea
                      rows={4}
                      defaultValue="Professional electrician with 10+ years of experience."
                      className="w-full mt-1 px-4 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Services Offered</label>
                    <input
                      type="text"
                      defaultValue="Electrical Installation, Repair, Maintenance"
                      className="w-full mt-1 px-4 py-2 border rounded-md"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Hourly Rate</label>
                      <input
                        type="text"
                        defaultValue="₹500"
                        className="w-full mt-1 px-4 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Service Area</label>
                      <input
                        type="text"
                        defaultValue="Gurgaon, Delhi, Noida"
                        className="w-full mt-1 px-4 py-2 border rounded-md"
                      />
                    </div>
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Portfolio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                        <Image className="h-8 w-8 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    <Image className="h-4 w-4 mr-2" />
                    Upload Images
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <span className="font-medium">Monday - Friday</span>
                      <span className="text-sm text-muted-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <span className="font-medium">Saturday</span>
                      <span className="text-sm text-muted-foreground">10:00 AM - 2:00 PM</span>
                    </div>
                    <Button variant="outline" className="w-full">Edit Schedule</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Sign Out Button */}
          <div className="mt-8">
            <Button 
              onClick={handleSignOut} 
              variant="outline" 
              className="w-full"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProviderDashboard;
