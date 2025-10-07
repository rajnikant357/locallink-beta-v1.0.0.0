import { Link, useLocation } from "react-router-dom";
import { Home, Grid3x3, CalendarCheck, Menu, Zap } from "lucide-react";
import { useState } from "react";
import MoreMenu from "./MoreMenu";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const BottomNavbar = () => {
  const location = useLocation();
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
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
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t z-40 block [@media(min-width:900px)]:hidden">
  <div className="flex items-center justify-between h-10 px-0.5 relative">
          <Link
            to="/"
            className={`flex flex-col items-center gap-1 flex-1 text-center ${isActive("/") ? "text-primary" : "text-black"}`}
          >
            <Home className={`h-4 w-4 ${isActive("/") ? "text-primary" : "text-black"}`} />
            <span className="text-[9px]">Home</span>
          </Link>

          <Link
            to="/categories"
            className={`flex flex-col items-center gap-1 flex-1 text-center ${isActive("/categories") ? "text-primary" : "text-black"}`}
          >
            <Grid3x3 className={`h-4 w-4 ${isActive("/categories") ? "text-primary" : "text-black"}`} />
            <span className="text-[9px]">Categories</span>
          </Link>

          {/* Hurry Mode - Circular Button */}
          <Link
            to="/hurry-mode-demo"
            className="flex flex-col items-center text-center mx-4"
          >
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-105`}
                style={{
                  background: "linear-gradient(135deg, #184bb8 0%, #b379ff 50%, #ff9800 100%)"
                }}
              >
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className={`text-[9px] font-semibold ${isActive("/hurry-mode-demo") ? "text-primary" : "text-black"}`}>Hurry</span>
            </div>
          </Link>

          <Link
            to="/my-bookings"
            className={`flex flex-col items-center gap-1 flex-1 text-center ${isActive("/my-bookings") ? "text-primary" : "text-black"}`}
          >
            <CalendarCheck className={`h-4 w-4 ${isActive("/my-bookings") ? "text-primary" : "text-black"}`} />
            <span className="text-[9px]">My Bookings</span>
          </Link>

          <button
            className="flex flex-col items-center gap-1 flex-1 text-center"
            onClick={() => setMoreMenuOpen(true)}
            style={{}}
          >
            <Menu className={`h-4 w-4 ${moreMenuOpen ? "text-primary" : "text-black"}`} />
            <span className={`text-[9px] font-semibold ${moreMenuOpen ? "text-primary" : "text-black"}`}>More</span>
          </button>
        </div>
      </nav>
      {moreMenuOpen && (
        <MoreMenu
          isAuthenticated={isAuthenticated}
          user={user}
          handleSignOut={handleSignOut}
          onClose={() => setMoreMenuOpen(false)}
        />
      )}
    </>
  );
};

export default BottomNavbar;
