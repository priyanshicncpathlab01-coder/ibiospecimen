import React from 'react';
import { Dna, Microscope, ShieldAlert, TestTube, Pill, Target, Activity } from 'lucide-react';

const Applications = () => {
  const apps = [
    {
      title: 'Genomics & DNA Extraction',
      description: 'Whole blood is one of the most common sources for genomic DNA isolation used in sequencing, genotyping, and hereditary disease studies.',
      icon: <Dna className="w-8 h-8 text-primary" />,
      bgColor: 'bg-primary/5',
      iconBg: 'bg-primary/10'
    },
    {
      title: 'Molecular Diagnostics',
      description: 'Used in PCR, qPCR, RT-PCR, liquid biopsy workflows, and infectious disease testing.',
      // fallback icon if Microscope is not found
      icon: <Activity className="w-8 h-8 text-blue-500" />,
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100'
    },
    {
      title: 'Immunology Research',
      description: 'Supports immune cell analysis, cytokine studies, inflammation markers, and autoimmune disease investigations.',
      icon: <ShieldAlert className="w-8 h-8 text-green-500" />,
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100'
    },
    {
      title: 'Hematology Studies',
      description: 'Used for CBC validation, blood disorder research, leukemia studies, and coagulation research.',
      icon: <TestTube className="w-8 h-8 text-red-500" />,
      bgColor: 'bg-red-50',
      iconBg: 'bg-red-100'
    },
    {
      title: 'Pharmaceutical Research',
      description: 'Used in drug response studies, toxicology, PK/PD models, and companion diagnostic development.',
      icon: <Pill className="w-8 h-8 text-purple-500" />,
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100'
    },
    {
      title: 'Biomarker Discovery',
      description: 'Ideal for discovering circulating biomarkers linked to cancer, diabetes, cardiovascular disease, and rare disorders.',
      icon: <Target className="w-8 h-8 text-amber-500" />,
      bgColor: 'bg-amber-50',
      iconBg: 'bg-amber-100'
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Applications of Human Whole Blood Samples</h2>
          <p className="text-lg text-slate-600">
            Our high-quality specimens are strictly procured to support a diverse array of advanced biomedical applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group relative overflow-hidden">
              {/* Decorative corner background */}
              <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full ${app.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className={`w-16 h-16 rounded-xl ${app.iconBg} flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                {app.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 relative z-10">{app.title}</h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                {app.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Applications;
