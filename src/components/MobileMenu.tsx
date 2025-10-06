import { Link } from "react-router-dom";
import { X, User, Settings, LogOut, Info, HelpCircle, Phone, FileText, Shield, DollarSign, Users, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface MobileMenuProps {
  isAuthenticated: boolean;
  user: { name?: string; email?: string; type?: string } | null;
  handleSignOut: () => void;
  closeMenu: () => void;
}

const MobileMenu = ({ isAuthenticated, user, handleSignOut, closeMenu }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    closeMenu();
  };

  return (
    <>
      {/* Hamburger button - shown on tablet (768px-899px) */}
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setIsOpen(true)}
        className="[@media(min-width:768px)_and_(max-width:899px)]:flex hidden"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-background z-50 overflow-y-auto">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-semibold">Menu</h2>
              <Button variant="ghost" size="icon" onClick={handleClose}>
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 p-4 space-y-2">
              <Link to="/providers" onClick={handleClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                <Users className="h-5 w-5" />
                <span>Providers</span>
              </Link>

              <Link to="/how-it-works" onClick={handleClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                <Info className="h-5 w-5" />
                <span>How It Works</span>
              </Link>

              <Link to="/about" onClick={handleClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                <Info className="h-5 w-5" />
                <span>About</span>
              </Link>

              <Link to="/contact" onClick={handleClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                <Phone className="h-5 w-5" />
                <span>Contact</span>
              </Link>

              <Link to="/faqs" onClick={handleClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                <HelpCircle className="h-5 w-5" />
                <span>FAQs</span>
              </Link>

              <Link to="/help-center" onClick={handleClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                <HelpCircle className="h-5 w-5" />
                <span>Help Center</span>
              </Link>

              <Link to="/pricing" onClick={handleClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                <DollarSign className="h-5 w-5" />
                <span>Pricing</span>
              </Link>

              <Link to="/terms" onClick={handleClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                <FileText className="h-5 w-5" />
                <span>Terms of Service</span>
              </Link>

              <Link to="/privacy" onClick={handleClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                <Shield className="h-5 w-5" />
                <span>Privacy Policy</span>
              </Link>

              {isAuthenticated && (
                <>
                  <div className="border-t my-2 pt-2">
                    <Link to="/dashboard" onClick={handleClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                      <User className="h-5 w-5" />
                      <span>Dashboard</span>
                    </Link>

                    <Link to="/settings" onClick={handleClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                      <Settings className="h-5 w-5" />
                      <span>Settings</span>
                    </Link>
                  </div>

                  <button
                    onClick={() => {
                      handleSignOut();
                      handleClose();
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors w-full text-left text-destructive"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Sign Out</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
