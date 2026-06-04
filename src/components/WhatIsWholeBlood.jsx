import React from 'react';
import { ShieldCheck } from "lucide-react";
import { Droplet, Network, Database, Dna, ActivitySquare, Pill } from 'lucide-react';

const WhatIsWholeBlood = () => {
  const components = [
    { name: 'Red blood cells (RBCs)', icon: <Droplet className="w-6 h-6 text-red-500" /> },
    { name: 'White blood cells (WBCs)', icon: <ShieldCheck className="w-6 h-6 text-slate-500" /> },
    { name: 'Platelets', icon: <Network className="w-6 h-6 text-amber-500" /> },
    { name: 'Plasma', icon: <Database className="w-6 h-6 text-yellow-500" /> },
    { name: 'Circulating biomarkers', icon: <ActivitySquare className="w-6 h-6 text-green-500" /> },
    { name: 'Genomic DNA and cellular material', icon: <Dna className="w-6 h-6 text-blue-500" /> },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What Are Human Whole Blood Samples?</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Human whole blood samples are unseparated blood specimens containing the complete profile of blood components. Whole blood is widely used because it preserves the native composition of blood, making it highly valuable for clinical and research applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {components.map((item, index) => (
                <div key={index} className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-4 group-hover:scale-110 transition-transform">
                    {/* Note: importing ShieldCheck locally since it was missed in top import */}
                    {item.name === 'White blood cells (WBCs)' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-slate-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                    ) : item.icon}
                  </div>
                  <span className="font-medium text-slate-700">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual/Image Placeholder */}
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200 aspect-[4/3] flex items-center justify-center border border-slate-200">
              {/* Decorative background circles */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>

              <div className="text-center z-10 p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-white/50 max-w-sm mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-500 mb-4 shadow-inner">
                  <Droplet className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Native Composition</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Preserving the complete biological system for accurate holistic research.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIsWholeBlood;
