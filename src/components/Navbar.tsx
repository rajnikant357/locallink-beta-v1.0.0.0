import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Bell, User, Settings, Home, LogOut, Menu } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import InstantModeToggle from "./InstantModeToggle";
import HurryModeDemo from "@/pages/HurryModeDemo";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const { isAuthenticated, signOut, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [instantMode, setInstantMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <div className="container px-0 mx-auto">
        <div className="flex h-16 items-center justify-between w-full">
          <Link to="/" className="flex items-center text-3xl font-bold pl-[20px]">
            <span style={{ color: '#184bb8ff' }}>Local</span><span style={{ color: '#b379ffff' }}>Link</span>
          </Link>

          {/* Desktop Links - hidden above 900px, mobile-first */}
          <div className="hidden [@media(min-width:900px)]:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/categories" className="text-foreground hover:text-primary transition-colors">Categories</Link>
            <Link to="/providers" className="text-foreground hover:text-primary transition-colors">Providers</Link>
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/hurry-mode-demo" className="text-foreground hover:text-primary transition-colors">Hurry Mode</Link>
          </div>

          <div className="flex items-center gap-3 pr-[20px]">
            <Link to="/settings">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Settings className="h-5 w-5" />
              </Button>
            </Link>
            {isAuthenticated ? (
              <>
                {user?.type === "provider" && (
                  <InstantModeToggle onToggle={setInstantMode} />
                )}
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
              </>
            ) : (
              <Link to="/auth">
                <Button>Sign In</Button>
              </Link>
            )}
            {/* Hamburger for mobile - now after sign button, visible below 900px */}
            <button className="hidden [@media(max-width:900px)]:flex items-center ml-2" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
              <Menu className="h-8 w-8 text-primary" />
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <MobileMenu
          isAuthenticated={isAuthenticated}
          user={user}
          handleSignOut={handleSignOut}
        />
      )}
      {mobileMenuOpen && (
        <button
          className="fixed inset-0 z-50 bg-transparent"
          style={{ cursor: "pointer" }}
          aria-label="Close menu"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
