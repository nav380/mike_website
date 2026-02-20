/**
 * Mobile Menu Component
 * Design Philosophy: Neo-Brutalism with Warmth
 * Features: Full-screen overlay navigation for mobile devices
 */

import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden w-10 h-10 border-2 border-gray-800 bg-orange-500 flex items-center justify-center transition-all duration-300"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Full-Screen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 md:hidden">
          <div className="container mx-auto px-4 py-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 border border-gray-800 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white leading-none">MIKE</h1>
                  <p className="text-xs text-gray-400">Events India</p>
                </div>
              </div>
              
              <button
                onClick={toggleMenu}
                className="w-10 h-10 border-2 border-gray-800 bg-orange-500 flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-4 mb-12">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block text-2xl font-bold text-white hover:text-orange-500 transition-colors py-3 border-b-2 border-gray-800/20"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <Button 
              className="w-full bg-orange-500 hover:bg-orange-400 text-white border border-gray-800 mb-8"
              size="lg"
              onClick={() => {
                handleLinkClick();
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Get Free Consultation
            </Button>

            {/* Quick Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">
                Quick Contact
              </h3>
              
              <a 
                href="tel:+919876543210"
                className="flex items-center gap-3 p-4 bg-gray-900 border-2 border-gray-800 hover:shadow-lg hover:shadow-orange-500/10 transition-all"
              >
                <div className="w-10 h-10 bg-amber-500 border-2 border-gray-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Call Us</div>
                  <div className="font-bold text-white">+91 98765 43210</div>
                </div>
              </a>

              <a 
                href="mailto:info@mikevents.in"
                className="flex items-center gap-3 p-4 bg-gray-900 border-2 border-gray-800 hover:shadow-lg hover:shadow-orange-500/10 transition-all"
              >
                <div className="w-10 h-10 bg-orange-400 border-2 border-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Email Us</div>
                  <div className="font-bold text-white">info@mikevents.in</div>
                </div>
              </a>

              <a 
                href="https://wa.me/919876543210"
                className="flex items-center gap-3 p-4 bg-gray-900 border-2 border-gray-800 hover:shadow-lg hover:shadow-orange-500/10 transition-all"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 border-2 border-gray-800 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">WhatsApp</div>
                  <div className="font-bold text-white">Chat with us</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
