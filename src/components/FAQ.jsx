import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What are human whole blood samples?",
      answer: "Human whole blood samples are blood specimens collected from human donors without separating the cellular and liquid components. Whole blood contains red blood cells, white blood cells, platelets, plasma, proteins, DNA, RNA, and other circulating biomarkers, making it useful for biomedical research, drug discovery, assay development, and diagnostic validation."
    },
    {
      question: "What are human whole blood samples used for in research?",
      answer: "Human whole blood samples are used in biomarker discovery, immune profiling, pharmacology studies, genomics, transcriptomics, infectious disease research, oncology research, autoimmune disease studies, diagnostic assay validation, and clinical research."
    },
    {
      question: "Do you provide healthy donor blood samples?",
      answer: "Yes. We can provide healthy donor whole blood samples for research applications. These samples may be used as normal controls in assay development, biomarker comparison, immune profiling, molecular testing, and diagnostic validation studies."
    },
    {
      question: "Do you provide disease-state human blood samples?",
      answer: "Yes. We can support disease-state human blood sample requirements for research projects. Disease areas may include oncology, autoimmune disorders, infectious diseases, diabetes, cardiovascular disease, neurological disorders, inflammatory diseases, kidney disease, liver disease, and other clinical indications depending on availability and project criteria."
    },
    {
      question: "What anticoagulant options are available for whole blood samples?",
      answer: "Human whole blood samples can be collected in different tube types depending on the research application. Common options include EDTA tubes, sodium heparin tubes, lithium heparin tubes, sodium citrate tubes, Streck tubes, and PAXgene tubes."
    },
    {
      question: "What is the difference between EDTA blood and heparin blood samples?",
      answer: "EDTA blood samples are commonly used for hematology, DNA extraction, molecular biology, and many biomarker studies. Heparin blood samples are often preferred for cell-based assays, immunology studies, and applications where cell viability is important. The correct anticoagulant should be selected based on the downstream testing method."
    },
    {
      question: "Are your human blood samples ethically sourced?",
      answer: "Yes. Human blood samples are sourced through ethical collection processes, with appropriate donor consent, IRB/ethics approval, waiver of consent where applicable, or institutional approval depending on the sample type and project."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">
            Find answers to common questions about our human whole blood sample procurement services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md border-primary/30 ring-1 ring-primary/20' : 'hover:border-slate-300'}`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none bg-white"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-primary' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : 'text-slate-400'}`} />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed bg-white">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Don't find what you're looking for?</p>
          <a href="#contact" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
            Contact us to discuss your specific requirements
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
