import React from 'react';
import { ShieldCheck } from "lucide-react";
import { Droplet, Network, Database, Dna, ActivitySquare, Pill } from 'lucide-react';
import bioimg from '../assets/bioimg.webp'

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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Human Biospecimens for Biomedical Research</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              iBioSpecimen provides high-quality human biospecimens for biomedical research, clinical studies, biomarker discovery, assay validation, molecular diagnostics, drug development, and medical device research. Through our global sourcing network, we offer ethically collected samples from healthy donors and patients with diverse disease conditions.
              <br></br>
              Our portfolio includes FFPE tissue blocks, fresh frozen tissue, whole blood, plasma, serum, PBMCs, matched sample sets, and disease-specific specimens, helping researchers accelerate scientific discovery and innovation.
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
<div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-200">
              <img
                src={bioimg}
                alt="Human Biospecimens"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Visual/Image Placeholder */}
          

        </div>
      </div>
    </section>
  );
};

export default WhatIsWholeBlood;
