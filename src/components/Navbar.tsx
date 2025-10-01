import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Bell, User, Settings, Home, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";

const Navbar = () => {
  const { isAuthenticated, signOut, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleSignOut = () => {
    signOut();
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
    navigate("/");
  };

  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            LocalLink
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/categories" className="text-foreground hover:text-primary transition-colors">
              Categories
            </Link>
            <Link to="/providers" className="text-foreground hover:text-primary transition-colors">
              Providers
            </Link>
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <Link to="/settings">
                  <Button variant="ghost" size="icon" className="hidden md:flex">
                    <Settings className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/notifications">
                  <Button variant="ghost" size="icon" className="hidden md:flex">
                    <Bell className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="ghost" size="icon" className="hidden md:flex">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
                <Button onClick={handleSignOut} variant="outline">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <Link to="/auth">
                <Button>Sign In</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
