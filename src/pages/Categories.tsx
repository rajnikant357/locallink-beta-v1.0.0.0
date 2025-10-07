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
      
      <div className="flex-1 py-6 md:py-12 bg-background pb-24 md:pb-12">
        <div className="container mx-auto px-3 md:px-4">
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">Service Categories</h1>
            <p className="text-muted-foreground text-sm md:text-lg">
              Browse all service categories available in your area
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={category.path}>
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                  <CardContent className="p-3 md:p-6">
                    <div className="relative w-14 h-14 md:w-12 md:h-12 mb-2 md:mb-3 bg-category-bg rounded-full flex items-center justify-center mx-auto md:mx-0">
                      <category.icon className="h-7 w-7 md:h-6 md:w-6 text-category-icon" />
                    </div>
                    
                    <h3 className="text-sm md:text-base font-semibold mb-1 text-center md:text-left">{category.name}</h3>
                    <p className="text-[10px] md:text-xs text-muted-foreground mb-2 min-h-[28px] md:min-h-[20px] text-center md:text-left line-clamp-2">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-between text-[10px] md:text-xs pt-2 border-t">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="h-3 w-3" />
                        <span className="hidden sm:inline">{category.providers} Providers</span>
                        <span className="sm:hidden">{category.providers}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{category.rating}</span>
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
