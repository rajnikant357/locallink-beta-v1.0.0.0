import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">LocalLink</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connecting you with trusted local service providers in Sikandarpur, Ballia and beyond.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-primary transition-colors">
                  Service Categories
                </Link>
              </li>
              <li>
                <Link to="/providers" className="text-gray-300 hover:text-primary transition-colors">
                  Find Providers
                </Link>
              </li>
              <li>
                <Link to="/register-provider" className="text-gray-300 hover:text-primary transition-colors">
                  Register as Provider
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-primary transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/payment-methods" className="text-gray-300 hover:text-primary transition-colors">
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link to="/learn-more" className="text-gray-300 hover:text-primary transition-colors">
                  Learn More
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help-center" className="text-gray-300 hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-300 hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="h-4 w-4" />
                support@locallink.com
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4" />
                +91 9876543210
              </li>
              <li className="text-gray-300">
                <div className="italic">LocalLink Office,</div>
                <div>Main Road, Sikandarpur,</div>
                <div>Ballia, Uttar Pradesh</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© 2025 LocalLink. All rights reserved.</p>
          <p className="mt-1">Available in: Sikandarpur, Ballia, and surrounding areas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
