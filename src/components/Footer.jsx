import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div>
            <div className="text-2xl font-extrabold tracking-tight text-white flex items-center mb-6">
              <span>i</span>Bio<span className="font-light">Specimen</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Providing high-quality human whole blood samples and biospecimens for biomedical research, clinical studies, and diagnostic development worldwide.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+1(408)580-1396" className="flex items-center hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-3 text-primary-light" />
                +1 (408)580-1396
              </a>
              <a href="mailto:info@ibiospecimen.com" className="flex items-center hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-3 text-primary-light" />
                info@ibiospecimen.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-light transition-colors">Human Biospecimens</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Human Tissue Samples</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">NGS Tissue Block</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">The Tissue Microarray</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Whole Slide Imaging Service</a></li>
            </ul>
          </div>

          {/* Biospecimen Types */}
          <div>
            <h4 className="text-white font-semibold mb-6">Biofluids</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-primary-light font-medium">Whole Blood</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Serum & Plasma</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Urine Samples</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Buffy Coat</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Matched Sample Sets</a></li>
            </ul>
          </div>

          {/* Biobanks */}
          <div>
            <h4 className="text-white font-semibold mb-6">Biobanks</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-light transition-colors">Online Biobank</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Digital Biobank</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Virtual Tissue Bank</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Biobank Management System</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">eBiobanks</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>Copyright © 2026 | iBioSpecimen. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
