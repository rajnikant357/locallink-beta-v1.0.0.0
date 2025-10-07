import { Link, useNavigate } from "react-router-dom";
import { X, User, Settings, LogOut, Info, HelpCircle, Phone, FileText, Shield, DollarSign, Users, Menu } from "lucide-react";
import React from "react";

interface MoreMenuProps {
  isAuthenticated: boolean;
  user: { name?: string; email?: string; type?: string } | null;
  handleSignOut: () => void;
  onClose: () => void;
}

const MoreMenu: React.FC<MoreMenuProps> = ({ isAuthenticated, user, handleSignOut, onClose }) => {
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    navigate(path);
    onClose();
  };

  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center pointer-events-auto" onClick={handleOverlayClick}>
      <div className="w-full max-w-sm mx-auto bg-background rounded-2xl shadow-2xl flex flex-col h-[90vh] overflow-y-auto border border-primary/20" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b bg-gradient-to-r from-primary/10 to-orange-100 rounded-t-2xl">
          <h2 className="text-xl font-bold text-primary">More</h2>
          <button
            type="button"
            className="rounded-full p-2 hover:bg-primary/20 transition-colors"
            aria-label="Close menu"
            onClick={onClose}
          >
            <X className="h-6 w-6 text-primary" />
          </button>
        </div>
        {/* Menu Items */}
        <div className="flex-1 p-4 space-y-3">
          <button onClick={() => handleNav("/providers")} className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-primary/10 transition-colors w-full text-left shadow-sm">
            <Users className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">Providers</span>
          </button>
          <button onClick={() => handleNav("/how-it-works")} className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-primary/10 transition-colors w-full text-left shadow-sm">
            <Info className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">How It Works</span>
          </button>
          <button onClick={() => handleNav("/about")} className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-primary/10 transition-colors w-full text-left shadow-sm">
            <Info className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">About</span>
          </button>
          <button onClick={() => handleNav("/contact")} className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-primary/10 transition-colors w-full text-left shadow-sm">
            <Phone className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">Contact</span>
          </button>
          <button onClick={() => handleNav("/faqs")} className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-primary/10 transition-colors w-full text-left shadow-sm">
            <HelpCircle className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">FAQs</span>
          </button>
          <button onClick={() => handleNav("/help-center")} className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-primary/10 transition-colors w-full text-left shadow-sm">
            <HelpCircle className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">Help Center</span>
          </button>
          <button onClick={() => handleNav("/pricing")} className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-primary/10 transition-colors w-full text-left shadow-sm">
            <DollarSign className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">Pricing</span>
          </button>
          <button onClick={() => handleNav("/terms")} className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-primary/10 transition-colors w-full text-left shadow-sm">
            <FileText className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">Terms of Service</span>
          </button>
          <button onClick={() => handleNav("/privacy")} className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-primary/10 transition-colors w-full text-left shadow-sm">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">Privacy Policy</span>
          </button>
          {isAuthenticated && (
            <>
              <div className="border-t my-2 pt-2">
                <button onClick={() => handleNav("/dashboard")} className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-primary/10 transition-colors w-full text-left shadow-sm">
                  <User className="h-5 w-5 text-primary" />
                  <span className="font-medium text-primary">Dashboard</span>
                </button>
                <button onClick={() => handleNav("/settings")} className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-primary/10 transition-colors w-full text-left shadow-sm">
                  <Settings className="h-5 w-5 text-primary" />
                  <span className="font-medium text-primary">Settings</span>
                </button>
              </div>
              <button
                onClick={() => {
                  handleSignOut();
                  onClose();
                }}
                className="flex items-center gap-3 p-3 rounded-xl bg-red-100 hover:bg-red-200 transition-colors w-full text-left text-destructive shadow-sm"
              >
                <LogOut className="h-5 w-5 text-red-600" />
                <span className="font-medium">Sign Out</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreMenu;
