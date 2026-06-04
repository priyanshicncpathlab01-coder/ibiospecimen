import React from 'react';
import { Globe, Clock, Archive, Users, Shield, Truck } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Global Donor Access',
      description: 'Our worldwide provider network gives researchers access to ethnically diverse donors from multiple geographic regions.',
      icon: <Globe className="w-7 h-7 text-white" />,
      color: 'bg-blue-600'
    },
    {
      title: 'Rapid Turnaround Times',
      description: 'Many fresh blood requests can be fulfilled within 24 to 48 hours, depending on criteria and region.',
      icon: <Clock className="w-7 h-7 text-white" />,
      color: 'bg-primary'
    },
    {
      title: 'Banked Inventory Availability',
      description: 'Large-volume banked blood collections are available for genomic studies and long-term programs.',
      icon: <Archive className="w-7 h-7 text-white" />,
      color: 'bg-teal-600'
    },
    {
      title: 'Custom Donor Matching',
      description: 'We help match donors based on diagnosis, biomarker status, medication use, clinical history, and more.',
      icon: <Users className="w-7 h-7 text-white" />,
      color: 'bg-amber-500'
    },
    {
      title: 'Quality & Compliance',
      description: 'All samples are sourced under strict ethical and regulatory standards with de-identification and quality controls.',
      icon: <Shield className="w-7 h-7 text-white" />,
      color: 'bg-emerald-600'
    },
    {
      title: 'Reliable Logistics',
      description: 'We manage cold-chain transport, ambient shipping, same-day dispatch, and international customs documentation.',
      icon: <Truck className="w-7 h-7 text-white" />,
      color: 'bg-indigo-600'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-slate-50 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose iBioSpecimen for Whole Blood Samples?</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We streamline the procurement process, ensuring you receive the exact specifications you need, when you need them.
              </p>
              <a href="#quote" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group">
                Find the Right Match
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${reason.color} flex items-center justify-center shadow-lg shadow-${reason.color}/30 transform -rotate-3`}>
                    <div className="transform rotate-3">
                      {reason.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{reason.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
