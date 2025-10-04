import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About section */}
          <div className="col-span-1 md:col-span-2">
            {/* Logo and description */}
            <div className="flex items-center justify-between mb-4 [@media(min-width:768px)]:block">
              <span className="text-2xl font-bold">
                <span style={{color: '#184bb8ff' }}>Local</span>
                <span style={{ color: '#b379ffff' }}>Link</span>
              </span>
              <div className="flex gap-3 [@media(min-width:768px)]:hidden">
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
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Connecting you with trusted local service providers in your area.
            </p>
            <div className="border-t border-gray-700 my-6"></div>
            <div className="flex gap-3 mt-4 [@media(max-width:767px)]:hidden">
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

          {/* Quick Links, Support, and Contact section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-row gap-8">
              {/* Quick Links */}
              <div className="flex-1">
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
                    <Link to="/learn-more" className="text-gray-300 hover:text-primary transition-colors">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div className="flex-1">
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

              {/* Contact section */}
              <div className="flex-1">
                <h4 className="font-semibold mb-4">Contact Us</h4>
                <ul className="flex flex-col gap-2 text-sm">
                  <li className="flex items-center gap-2 text-gray-300">
                    <a href="mailto:support@locallink.com" className="flex items-center gap-2 text-gray-300 hover:text-primary">
                      <Mail className="h-4 w-4" />
                      support@locallink.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <a href="tel:+917084202503" className="flex items-center gap-2 text-gray-300 hover:text-primary">
                      <Phone className="h-4 w-4" />
                      +91 7084202503
                    </a>
                  </li>
                  <li className="text-gray-300 min-w-[120px]">
                    <div className="italic">LocalLink Office,</div>
                    <div>Main Road, Dadar,</div>
                    <div>Ballia, Uttar Pradesh</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-4 pt-3 pb-2 text-center text-sm text-gray-400">
          <p>© 2025 LocalLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;