import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, MapPin, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const providers = [
  {
    name: "Rajesh Kumar",
    rating: 4.8,
    location: "Sikandarpur, 2.3 km",
    hourly: "₹500/hour",
    available: true,
    skills: ["Wiring", "Repairs", "Installation"],
  },
  {
    name: "Vikram Patel",
    rating: 4.7,
    location: "Sikandarpur, 1.5 km",
    hourly: "₹550/hour",
    available: true,
    skills: ["AC Repair", "Wiring", "Appliances"],
  },
  {
    name: "Deepak Verma",
    rating: 4.5,
    location: "Ballia, 3.8 km",
    hourly: "₹480/hour",
    available: false,
    skills: ["Wiring", "Installation", "Maintenance"],
  },
];

const CategoryDetail = () => {
  const { category } = useParams();
  const [showFilters, setShowFilters] = useState(false);
  const categoryName = category?.charAt(0).toUpperCase() + category?.slice(1) || "Category";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-background">
        {/* Header */}
        <div className="border-b bg-muted/30 py-6">
          <div className="container mx-auto px-4">
            <Link to="/categories" className="text-primary hover:underline flex items-center gap-1 mb-4">
              <ChevronLeft className="h-4 w-4" />
              Back to Categories
            </Link>
            
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{categoryName}</h1>
                <p className="text-muted-foreground">
                  8 service providers available in your area
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Select defaultValue="nearest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nearest">Nearest First</SelectItem>
                    <SelectItem value="rating">Highest Rating</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button 
                  variant="outline" 
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">Filters</h3>
                  </div>

                  {/* Availability */}
                  <div>
                    <h4 className="font-medium mb-3">Availability</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="available-now" />
                        <Label htmlFor="available-now" className="text-sm">Available Now</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="available-today" />
                        <Label htmlFor="available-today" className="text-sm">Available Today</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="available-week" />
                        <Label htmlFor="available-week" className="text-sm">Available This Week</Label>
                      </div>
                    </div>
                  </div>

                  {/* Distance */}
                  <div>
                    <h4 className="font-medium mb-3">Distance</h4>
                    <div className="space-y-3">
                      <Slider defaultValue={[20]} max={50} step={1} />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>0 km</span>
                        <span>5 km</span>
                        <span>20 km</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div>
                    <h4 className="font-medium mb-3">Minimum Rating</h4>
                    <div className="space-y-2">
                      {[4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center space-x-2">
                          <Checkbox id={`rating-${rating}`} />
                          <Label htmlFor={`rating-${rating}`} className="text-sm flex items-center gap-1">
                            {rating}+ <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="font-medium mb-3">Price Range (per hour)</h4>
                    <div className="flex gap-2">
                      <Input placeholder="₹ Min" type="number" />
                      <span className="self-center">-</span>
                      <Input placeholder="₹ Max" type="number" />
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <h4 className="font-medium mb-3">Experience</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="exp-1" />
                        <Label htmlFor="exp-1" className="text-sm">Less than 1 year</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="exp-3" />
                        <Label htmlFor="exp-3" className="text-sm">1-3 years</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="exp-5" />
                        <Label htmlFor="exp-5" className="text-sm">3-5 years</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="exp-5plus" />
                        <Label htmlFor="exp-5plus" className="text-sm">5+ years</Label>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 space-y-2">
                    <Button className="w-full">Apply Filters</Button>
                    <Button variant="outline" className="w-full">Reset</Button>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Providers List */}
            <div className="lg:col-span-3 space-y-4">
              {providers.map((provider) => (
                <Card key={provider.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-20 h-20 bg-category-bg rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-semibold text-category-icon">
                          {provider.name.charAt(0)}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold mb-1">{provider.name}</h3>
                            <p className="text-sm text-muted-foreground">{categoryName}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-lg">{provider.rating}</span>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {provider.location}
                          </p>
                          <p className="font-semibold">{provider.hourly}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {provider.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${provider.available ? 'bg-green-500' : 'bg-red-500'}`} />
                            <span className="text-sm text-muted-foreground">
                              {provider.available ? 'Available Now' : 'Not Available'}
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <Button variant="outline">View Profile</Button>
                            <Button>Contact</Button>
                            <Button variant="secondary">Book Now</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-8">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="outline">1</Button>
                <Button>2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryDetail;
