
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { X, Settings, User, MessageSquare } from "lucide-react";
import ChatbotIcon from "./ui/chatbotIcon";


const MobileMenu = ({ isAuthenticated, user, handleSignOut, closeMenu }) => {
  const navigate = useNavigate();
  const handleNav = (to) => {
    closeMenu();
    navigate(to);
  };
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-end">
  <div className="bg-background w-64 h-full shadow-lg p-6 flex flex-col gap-6 animate-slide-in-right relative">
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold pl-[20px] cursor-pointer" onClick={() => handleNav("/")}>LocalLink</span>
          <button className="pr-[20px]" aria-label="Close menu" onClick={closeMenu}>
            <X className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
        <button className="text-left text-foreground hover:text-primary" onClick={() => handleNav("/")}>Home</button>
        <button className="text-left text-foreground hover:text-primary" onClick={() => handleNav("/categories")}>Categories</button>
        <button className="text-left text-foreground hover:text-primary" onClick={() => handleNav("/providers")}>Providers</button>
        <button className="text-left text-foreground hover:text-primary" onClick={() => handleNav("/how-it-works")}>How It Works</button>
        <button className="text-left text-foreground hover:text-primary" onClick={() => handleNav("/about")}>About</button>
        <button className="text-left text-foreground hover:text-primary" onClick={() => handleNav("/hurry-mode-demo")}>Hurry Mode</button>
        <button className="text-left text-foreground hover:text-primary flex items-center gap-2" onClick={() => handleNav("/settings")}>  Settings</button>
        {isAuthenticated ? (
          <>
            <button className="text-left text-foreground hover:text-primary" onClick={() => handleNav("/dashboard")}>Dashboard</button>
            {/* User icon and chatbot at bottom in a row */}
            <div className="absolute bottom-6 left-0 w-full flex flex-col items-center gap-3">
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white" onClick={() => handleNav("/chatbot")}> <MessageSquare className="h-6 w-6" /> </button>
              <Button variant="outline" className="w-full mt-2" onClick={() => { handleSignOut(); closeMenu(); }}>Sign Out</Button>
                <div className="flex flex-row items-center justify-center gap-4 w-full mt-2">
                  <button className="text-muted-foreground hover:text-primary text-sm" onClick={() => handleNav("/terms")}>Terms of Service</button>
                  <button className="text-muted-foreground hover:text-primary text-sm" onClick={() => handleNav("/policy")}>Privacy Policy</button>
                </div>
            </div>
          </>
        ) : (
          <div className="absolute bottom-6 left-0 w-full flex flex-col items-center gap-3">
            <div className="flex flex-row items-center justify-center gap-4 w-full">
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white" onClick={() => handleNav("/chatbot")}> <MessageSquare className="h-6 w-6" /> </button>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 w-full mt-2">
              <button className="text-muted-foreground hover:text-primary text-sm" onClick={() => handleNav("/terms")}>Terms of Service</button>
              <button className="text-muted-foreground hover:text-primary text-sm" onClick={() => handleNav("/policy")}>Privacy Policy</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
