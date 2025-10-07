import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Bell, User, Settings, Home, LogOut, Menu, ArrowLeft, MessageSquare } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import NavbarUserAvatar from "./NavbarUserAvatar";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import MessagesOverlay from "./MessagesOverlay";
import InstantModeToggle from "./InstantModeToggle";
import HurryModeDemo from "@/pages/HurryModeDemo";

const Navbar = () => {
  const { isAuthenticated, signOut, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [instantMode, setInstantMode] = useState(false);
  const [messagesOpen, setMessagesOpen] = useState(false);

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
    <>
      <nav className="border-b bg-background sticky top-0 z-50">
        <div className="container px-0 mx-auto">
          <div className="flex h-10 items-center justify-between w-full [@media(min-width:900px)]:h-16">
            <div className="flex items-center gap-3">
              {/* Back arrow in circle, hidden on home page */}
              {location.pathname !== "/" && (
                <button
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 ml-[5px] mr-[5px] [@media(min-width:900px)]:hidden"
                  aria-label="Go Back"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
              )}
              <Link to="/" className={`flex items-center text-2xl font-bold ${location.pathname === '/' ? 'pl-[20px]' : ''}`}>
                <span style={{ color: '#184bb8ff' }}>Local</span><span style={{ color: '#b379ffff' }}>Link</span>
              </Link>
            </div>

            {/* Desktop Links - hidden above 900px, mobile-first */}
            <div className="hidden [@media(min-width:900px)]:flex items-center gap-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/categories" className="text-foreground hover:text-primary transition-colors">Categories</Link>
              <Link to="/providers" className="text-foreground hover:text-primary transition-colors">Providers</Link>
              <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/hurry-mode-demo" className="text-foreground hover:text-primary transition-colors">Hurry Mode</Link>
            </div>

            <div className="flex items-center gap-2 pr-[20px]">
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
                    <Button variant="ghost" size="icon">
                      <Bell className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Button variant="ghost" size="icon" aria-label="Messages" onClick={() => setMessagesOpen(true)}>
                    <MessageSquare className="h-5 w-5" />
                  </Button>
                  {isAuthenticated && (
                    <Link to="/dashboard" className="flex items-center">
                      <NavbarUserAvatar name={user?.name || "U"} type={user?.type || "customer"} />
                    </Link>
                  )}
                </>
              ) : (
                <Link to="/auth">
                  <Button>Sign In</Button>
                </Link>
              )}
              {/* Hamburger menu for tablet view (768px - 900px) */}
            </div>
          </div>
        </div>
      </nav>
      <MessagesOverlay 
        open={messagesOpen} 
        onClose={() => setMessagesOpen(false)} 
        zIndex={100}
      />
    </>
  );
};

export default Navbar;
