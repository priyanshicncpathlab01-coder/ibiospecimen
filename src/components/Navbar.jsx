import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-slate-50 border-b border-slate-200 hidden md:block">
        <div className="container mx-auto px-4 lg:px-8 py-2 flex justify-between items-center text-sm text-slate-600">
          <div className="flex items-center gap-6">
            <a href="tel:+1(408)580-1396" className="flex items-center hover:text-primary transition-colors">
              <Phone className="w-4 h-4 mr-2 text-primary" />
              +1 (408)580-1396
            </a>
            <a href="mailto:info@ibiospecimen.com" className="flex items-center hover:text-primary transition-colors">
              <Mail className="w-4 h-4 mr-2 text-primary" />
              info@ibiospecimen.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors font-medium">INVENTORY</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo Placeholder */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-extrabold tracking-tight text-primary flex items-center">
              <span className="text-slate-800">i</span>Bio<span className="font-light">Specimen</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center font-medium text-slate-700">
            <div className="relative group">
              <button className="hover:text-primary py-2 transition-colors flex items-center gap-1">
                Human Biospecimens
              </button>
            </div>
            <a href="#" className="hover:text-primary transition-colors py-2">Services</a>
            <a href="#" className="hover:text-primary transition-colors py-2">About Us</a>
            <a href="#" className="hover:text-primary transition-colors py-2">Contact Us</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-slate-500 hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <a href="#quote" className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
              Request a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-500 hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#" className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md">Human Biospecimens</a>
            <a href="#" className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md">Services</a>
            <a href="#" className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md">About Us</a>
            <a href="#" className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md">Contact Us</a>
            <a href="#" className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md">INVENTORY</a>
            <div className="pt-4 px-3 flex flex-col gap-3">
              <a href="#quote" className="w-full text-center bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-md font-medium transition-colors">
                Request a Quote
              </a>
              <div className="flex flex-col gap-2 mt-4 text-sm text-slate-500">
                <a href="tel:+1(408)580-1396" className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +1 (408)580-1396</a>
                <a href="mailto:info@ibiospecimen.com" className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@ibiospecimen.com</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
