import React from 'react';
import { Network, Microscope, Dna, Layers, Zap, Globe2 } from 'lucide-react';

const DetailedContent = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary-dark text-sm font-bold tracking-wide uppercase mb-4">
            <Globe2 className="w-4 h-4 mr-2" />
            Global Research Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Premium Human Whole Blood Specimens
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Empowering breakthroughs in diagnostic development, translational pharmacology, advanced genomics, and liquid biopsy innovation.
          </p>
        </div>

        {/* Dynamic Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main Content Block (Left) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform"></div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 relative z-10">Expansive Global Infrastructure</h3>
              <p className="text-lg text-slate-600 leading-relaxed relative z-10">
                Leveraging our expansive global procurement infrastructure, we facilitate the acquisition of pristine fresh collections, robust banked inventories, and highly specialized prospective cohorts. Every specimen is rigorously curated to meet exacting scientific, pre-analytical, and logistical parameters. Regardless of your geographic footprint, our dedicated team seamlessly aligns our sourcing strategies with your rigorous research protocols.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Network className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Customized Pre-Analytical Variables</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We recognize that pre-analytical variables are critical to experimental integrity. Every procurement initiative is meticulously customized—from specific anticoagulants (EDTA, sodium heparin, citrate) to precise cold-chain logistics. We routinely source from finely characterized cohorts encompassing oncology, complex autoimmune disorders, and rare genetic conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Highlight Block (Right) */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 shadow-lg text-white h-full relative overflow-hidden flex flex-col justify-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 border-4 border-white/10 rounded-full"></div>
              <div className="absolute -right-4 -top-10 w-24 h-24 border-4 border-white/10 rounded-full"></div>
              
              <Zap className="w-10 h-10 text-yellow-300 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">The Unparalleled Value of Whole Blood</h3>
              <p className="text-primary-light font-medium text-lg leading-relaxed relative z-10 mb-6">
                A holistic snapshot of an active biological system.
              </p>
              <p className="text-white/80 text-sm leading-relaxed relative z-10">
                Unlike isolated serum or plasma, it preserves the intricate interplay of cellular and non-cellular elements—encompassing RBCs, WBCs, platelets, free-circulating nucleic acids, and complex immune signaling molecules. Indispensable for dissecting immune cascades and tracking disease trajectories.
              </p>
            </div>
          </div>
        </div>

        {/* Two-Column Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="group rounded-3xl bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600 w-full"></div>
            <div className="p-8 md:p-10">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Dna className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-4">Genomic Sequencing</h4>
              <p className="text-slate-600 leading-relaxed">
                As a premier source of high-yield genomic DNA and cellular matter, whole blood remains foundational to modern molecular workflows. We curate specimens tailored to your specific extraction protocols, ensuring unparalleled stability and fidelity for high-throughput sequencing and targeted diagnostic panels.
              </p>
            </div>
          </div>
          
          <div className="group rounded-3xl bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600 w-full"></div>
            <div className="p-8 md:p-10">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <Microscope className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-4">Liquid Biopsy & Oncology</h4>
              <p className="text-slate-600 leading-relaxed">
                Driving the frontier of non-invasive diagnostics, our whole blood specimens enable high-resolution tracking of circulating tumor DNA, elusive biomarkers, and dynamic immune responses. We also offer impeccably matched sample sets to fuel comprehensive multi-omic investigations.
              </p>
            </div>
          </div>
        </div>

        {/* Wide Callout */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')]"></div>
          
          <div className="relative z-10 md:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-6 h-6 text-primary-light" />
              <span className="text-primary-light font-semibold uppercase tracking-wider text-sm">Multi-Dimensional Discovery</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Longitudinally Matched Sets</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Sourcing whole blood alongside paired serum, isolated PBMCs, deeply annotated tissue biopsies, or alternative biofluids from a single donor significantly amplifies the statistical power and translational relevance of your research.
            </p>
          </div>
          
          <div className="relative z-10 md:w-1/3 flex justify-end w-full">
            <a href="#quote" className="w-full md:w-auto text-center bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-bold transition-colors shadow-lg hover:shadow-xl">
              Partner With Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DetailedContent;
