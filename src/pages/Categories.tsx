import { Link } from "react-router-dom";
import { Zap, Wrench, Hammer, Paintbrush, Sparkles, Shirt, HardHat, Leaf, Star, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  {
    icon: Zap,
    name: "Electrician",
    description: "Wiring, repairs, installations and more",
    providers: 48,
    rating: 4.7,
    path: "/category/electrician"
  },
  {
    icon: Wrench,
    name: "Plumber",
    description: "Pipe fitting, leakage repair, bathroom work",
    providers: 36,
    rating: 4.5,
    path: "/category/plumber"
  },
  {
    icon: Hammer,
    name: "Carpenter",
    description: "Furniture repair, custom woodwork, installations",
    providers: 29,
    rating: 4.6,
    path: "/category/carpenter"
  },
  {
    icon: Paintbrush,
    name: "Painter",
    description: "Interior, exterior painting and wall art",
    providers: 24,
    rating: 4.4,
    path: "/category/painter"
  },
  {
    icon: Sparkles,
    name: "Cleaner",
    description: "Home, office, and deep cleaning services",
    providers: 42,
    rating: 4.7,
    path: "/category/cleaner"
  },
  {
    icon: Shirt,
    name: "Tailor",
    description: "Stitching, alterations, and custom designs",
    providers: 18,
    rating: 4.8,
    path: "/category/tailor"
  },
  {
    icon: HardHat,
    name: "Mason",
    description: "Brick work, concrete, and construction",
    providers: 22,
    rating: 4.5,
    path: "/category/mason"
  },
  {
    icon: Leaf,
    name: "Gardener",
    description: "Garden maintenance, landscaping, and planting",
    providers: 15,
    rating: 4.6,
    path: "/category/gardener"
  },
];

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Service Categories</h1>
            <p className="text-muted-foreground text-lg">
              Browse all service categories available in your area
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={category.path}>
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mb-4 bg-category-bg rounded-full flex items-center justify-center">
                      <category.icon className="h-8 w-8 text-category-icon" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{category.providers} Providers</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{category.rating} Avg</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
