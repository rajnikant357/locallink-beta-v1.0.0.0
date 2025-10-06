import { Link, useLocation } from "react-router-dom";
import { Home, Grid3x3, CalendarCheck, Menu, Zap } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const BottomNavbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
    navigate("/");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t z-40 [@media(max-width:767px)]:block hidden">
        <div className="flex items-center justify-around h-20 px-2 relative">
          <Link
            to="/"
            className={`flex flex-col items-center gap-1 flex-1 ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Home className="h-6 w-6" />
            <span className="text-xs">Home</span>
          </Link>

          <Link
            to="/categories"
            className={`flex flex-col items-center gap-1 flex-1 ${
              isActive("/categories") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Grid3x3 className="h-6 w-6" />
            <span className="text-xs">Categories</span>
          </Link>

          {/* Hurry Mode - Circular Button */}
          <Link
            to="/hurry-mode-demo"
            className="flex flex-col items-center -mt-8"
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
              isActive("/hurry-mode-demo") ? "bg-primary text-primary-foreground" : "bg-primary/90 text-primary-foreground"
            }`}>
              <Zap className="h-7 w-7 fill-current" />
            </div>
            <span className="text-xs mt-1 text-muted-foreground">Hurry</span>
          </Link>

          <Link
            to="/my-bookings"
            className={`flex flex-col items-center gap-1 flex-1 ${
              isActive("/my-bookings") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <CalendarCheck className="h-6 w-6" />
            <span className="text-xs">My Bookings</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex flex-col items-center gap-1 flex-1 text-muted-foreground"
          >
            <Menu className="h-6 w-6" />
            <span className="text-xs">More</span>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <MobileMenu
          isAuthenticated={isAuthenticated}
          user={user}
          handleSignOut={handleSignOut}
          closeMenu={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default BottomNavbar;
