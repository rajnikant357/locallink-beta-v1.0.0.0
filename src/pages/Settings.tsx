import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { User, Bell, Lock, CreditCard, Globe, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Settings = () => {
  const { isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    location: "Sikandarpur, Ballia",
  });

  const [notifications, setNotifications] = useState({
    bookingConfirm: true,
    messages: true,
    reviews: true,
    promotions: false,
  });

  const [preferences, setPreferences] = useState({
    language: "en",
    currency: "INR",
    darkMode: false,
  });

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
    });
  };

  const handleSaveNotifications = () => {
    toast({
      title: "Preferences Saved",
      description: "Your notification preferences have been updated.",
    });
  };

  const handleSignOut = () => {
    signOut();
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
    navigate("/");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Sign In Required</CardTitle>
                  <CardDescription>
                    You need to sign in to access and manage your settings.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/auth">
                    <Button className="w-full">Sign In</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Settings</h1>

            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="profile">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="notifications">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="security">
                  <Lock className="h-4 w-4 mr-2" />
                  Security
                </TabsTrigger>
                <TabsTrigger value="payment">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Payment
                </TabsTrigger>
                <TabsTrigger value="preferences">
                  <Globe className="h-4 w-4 mr-2" />
                  Preferences
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
                      <p className="text-muted-foreground mb-6">
                        Update your personal information and contact details
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={profile.name}
                          onChange={(e) => setProfile({...profile, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({...profile, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={profile.phone}
                          onChange={(e) => setProfile({...profile, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={profile.location}
                          onChange={(e) => setProfile({...profile, location: e.target.value})}
                        />
                      </div>
                    </div>

                    <Button onClick={handleSaveProfile}>Save Changes</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Notification Preferences</h2>
                      <p className="text-muted-foreground mb-6">
                        Manage how you receive notifications
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="booking-notif">Booking Confirmations</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified when bookings are confirmed
                          </p>
                        </div>
                        <Switch
                          id="booking-notif"
                          checked={notifications.bookingConfirm}
                          onCheckedChange={(checked) => setNotifications({...notifications, bookingConfirm: checked})}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="message-notif">Messages</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified about new messages
                          </p>
                        </div>
                        <Switch
                          id="message-notif"
                          checked={notifications.messages}
                          onCheckedChange={(checked) => setNotifications({...notifications, messages: checked})}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="review-notif">Review Requests</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified to leave reviews
                          </p>
                        </div>
                        <Switch
                          id="review-notif"
                          checked={notifications.reviews}
                          onCheckedChange={(checked) => setNotifications({...notifications, reviews: checked})}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="promo-notif">Promotions</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive promotional offers and updates
                          </p>
                        </div>
                        <Switch
                          id="promo-notif"
                          checked={notifications.promotions}
                          onCheckedChange={(checked) => setNotifications({...notifications, promotions: checked})}
                        />
                      </div>
                    </div>

                    <Button onClick={handleSaveNotifications}>Save Preferences</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Security Settings</h2>
                      <p className="text-muted-foreground mb-6">
                        Manage your password and security preferences
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" placeholder="••••••••" />
                      </div>
                      <div>
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" placeholder="••••••••" />
                      </div>
                      <div>
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" placeholder="••••••••" />
                      </div>
                    </div>

                    <Button>Update Password</Button>

                    <div className="border-t pt-6">
                      <h3 className="font-semibold mb-4">Two-Factor Authentication</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Add an extra layer of security to your account
                      </p>
                      <Button variant="outline">Enable 2FA</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payment">
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
                      <p className="text-muted-foreground mb-6">
                        Manage your payment methods and billing information
                      </p>
                    </div>

                    <div className="text-center py-12">
                      <CreditCard className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-4">No payment methods added yet</p>
                      <Button>Add Payment Method</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences">
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">App Preferences</h2>
                      <p className="text-muted-foreground mb-6">
                        Customize your app experience
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Dark Mode</Label>
                          <p className="text-sm text-muted-foreground">
                            Switch to dark theme
                          </p>
                        </div>
                        <Switch
                          checked={preferences.darkMode}
                          onCheckedChange={(checked) => setPreferences({...preferences, darkMode: checked})}
                        />
                      </div>

                      <div>
                        <Label htmlFor="language">Language</Label>
                        <Input id="language" value="English" disabled />
                      </div>

                      <div>
                        <Label htmlFor="currency">Currency</Label>
                        <Input id="currency" value="INR (₹)" disabled />
                      </div>
                    </div>

                    <Button>Save Preferences</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

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
      </div>

      <Footer />
    </div>
  );
};

export default Settings;
