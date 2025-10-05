import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Bell, User, Settings, Home, LogOut, Menu, MessageSquare, X } from "lucide-react";
import NavbarUserAvatar from "./NavbarUserAvatar";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import InstantModeToggle from "./InstantModeToggle";
import HurryModeDemo from "@/pages/HurryModeDemo";

const MobileMenu = ({ isAuthenticated, user, handleSignOut, closeMenu }) => {
  const navigate = useNavigate();
  const handleNav = () => {
    closeMenu();
  };
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-end">
  <div className="bg-background w-64 h-full shadow-lg p-6 flex flex-col gap-6 animate-slide-in-right relative">
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold pl-[20px] cursor-pointer" onClick={handleNav}>LocalLink</span>
          <button className="pr-[20px]" aria-label="Close menu" onClick={closeMenu}>
            <X className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
  <Link to="/" className="text-left text-foreground hover:text-primary" onClick={handleNav}>Home</Link>
  <Link to="/categories" className="text-left text-foreground hover:text-primary" onClick={handleNav}>Categories</Link>
  <Link to="/providers" className="text-left text-foreground hover:text-primary" onClick={handleNav}>Providers</Link>
  <Link to="/how-it-works" className="text-left text-foreground hover:text-primary" onClick={handleNav}>How It Works</Link>
  <Link to="/about" className="text-left text-foreground hover:text-primary" onClick={handleNav}>About</Link>
  <Link to="/hurry-mode-demo" className="text-left text-foreground hover:text-primary" onClick={handleNav}>Hurry Mode</Link>
  {/* Removed settings text link from main list */}
        {isAuthenticated ? (
          <>
            <Link to="/help-center" className="text-left text-foreground hover:text-primary" onClick={handleNav}>Help Center</Link>
            <Link to="/faqs" className="text-left text-foreground hover:text-primary" onClick={handleNav}>FAQs</Link>
            <Link to="/contact" className="text-left text-foreground hover:text-primary" onClick={handleNav}>Contact Us</Link>
            {/* Chatbot, Settings icon, User icon, and Sign Out button in a row at the bottom */}
            <div className="absolute bottom-6 left-0 w-full flex flex-col items-center gap-3">
              <div className="flex flex-row items-center justify-center gap-4 w-full">
                <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors" onClick={handleNav}>
                  <NavbarUserAvatar name={user?.name || "U"} type={user?.type || "customer"} />
                  <span className="text-base font-medium text-blue-900 truncate max-w-[120px]">{user?.name || "User"}</span>
                </Link>
                <Link to="/settings" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 text-gray-700" onClick={handleNav}>
                  <Settings className="h-6 w-6" />
                </Link>
              </div>
              <div className="flex flex-row items-center justify-center gap-4 w-full mt-2">
                <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm" onClick={handleNav}>Terms of Service</Link>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm" onClick={handleNav}>Privacy Policy</Link>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute bottom-6 left-0 w-full flex flex-col items-center gap-3">
            <div className="flex flex-row items-center justify-center gap-4 w-full">
              <Link to="/auth" className="w-20" onClick={handleNav}>
                <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">Sign In</Button>
              </Link>
              <Link to="/settings" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 text-gray-700" onClick={handleNav}>
                <Settings className="h-6 w-6" />
              </Link>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 w-full mt-2">
              <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm" onClick={handleNav}>Terms of Service</Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm" onClick={handleNav}>Privacy Policy</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
