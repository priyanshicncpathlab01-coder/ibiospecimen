import React from 'react';
import { ArrowRight, Activity, Beaker, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';
import ss1 from "../assets/ss1.webp";
import ss2 from "../assets/ss2.webp";
import ss3 from "../assets/ss3.webp";

const Hero = () => {
  const images = [
    ss1, ss2, ss3
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-[700px] lg:min-h-screen bg-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}<div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-slate-900/30" />

        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-primary/20 blur-3xl opacity-50 mix-blend-screen"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-blue-500/20 blur-3xl opacity-40 mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to
        ottom,white,transparent)]"></div>      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-300 text-sm font-medium mb-6 backdrop-blur-md">
            <Activity className="w-4 h-4 mr-2" />
            High-Quality Human Biospecimens
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Human Biospecimen Partner Network
            <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary-light">
              For Research & Diagnostics
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl leading-relaxed">
            Partner with iBioSpecimen to access a global network of high-quality human biospecimens across the USA and Europe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="inline-flex justify-center items-center bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_0_20px_rgba(101,47,145,0.4)] hover:shadow-[0_0_30px_rgba(101,47,145,0.6)] group">
              Request a Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#inventory" className="inline-flex justify-center items-center bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-md">
              View Inventory
            </a>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 pt-10 border-t border-white/10">
          <div className="flex items-start">
            <div className="bg-white/10 p-3 rounded-xl mr-4 text-blue-400 backdrop-blur-sm">
              <Beaker className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Extensive Variety</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Fresh, frozen, and matched sets tailored to your research needs.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-white/10 p-3 rounded-xl mr-4 text-green-400 backdrop-blur-sm">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Global Donor Access</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Access to diverse healthy and diseased donors worldwide.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-white/10 p-3 rounded-xl mr-4 text-purple-400 backdrop-blur-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Ethical Sourcing</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Strict regulatory standards with full sample traceability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
