import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const allProviders = [
  { name: "Rajesh Kumar", role: "Electrician", rating: 4.8, location: "Sikandarpur, 2.3 km", hourly: "₹500/hour", skills: ["Wiring", "Repairs", "Installation"] },
  { name: "Sunil Yadav", role: "Plumber", rating: 4.6, location: "Ballia, 3.1 km", hourly: "₹450/hour", skills: ["Pipe Fitting", "Leakage"] },
  { name: "Amit Singh", role: "Carpenter", rating: 4.9, location: "Sikandarpur, 1.8 km", hourly: "₹600/hour", skills: ["Furniture", "Custom Work"] },
  { name: "Priya Sharma", role: "Cleaner", rating: 4.7, location: "Ballia, 2.5 km", hourly: "₹400/hour", skills: ["Home Cleaning", "Deep Clean"] },
  { name: "Mohan Das", role: "Painter", rating: 4.5, location: "Sikandarpur, 3.2 km", hourly: "₹550/hour", skills: ["Interior", "Exterior"] },
  { name: "Kavita Devi", role: "Tailor", rating: 4.8, location: "Ballia, 1.2 km", hourly: "₹350/hour", skills: ["Stitching", "Alterations"] },
];

const Providers = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleAuthRequired = () => {
    toast({
      title: "Authentication required",
      description: "Please sign in to contact a provider.",
      variant: "destructive",
    });
    navigate("/auth");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">All Service Providers</h1>
            <p className="text-muted-foreground text-lg">
              Browse through our verified service providers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProviders.map((provider) => (
              <Card key={provider.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-category-bg rounded-full flex items-center justify-center">
                        <span className="text-lg font-semibold text-category-icon">
                          {provider.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold">{provider.name}</h3>
                        <p className="text-sm text-muted-foreground">{provider.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{provider.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {provider.location}
                    </p>
                    <p className="text-sm font-semibold">{provider.hourly}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {provider.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">View Profile</Button>
                    <Button 
                      size="sm"
                      onClick={() => isAuthenticated ? null : handleAuthRequired()}
                    >
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Providers;
