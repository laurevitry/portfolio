import React from 'react';
import { Mail, Linkedin, ArrowUpRight, FileText } from 'lucide-react';

interface ContactProps {
  onOpenResume?: () => void;
}

const Contact: React.FC<ContactProps> = () => {
  const ACCENT_BLUE = '#2A4B6A';

  return (
    <section id="contact" className="py-20 px-8 md:px-16 bg-zinc-50 mb-20">
      <div className="max-w-4xl">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Contact</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Let’s talk product.</h3>
        <p className="text-lg text-gray-600 mb-12 max-w-lg font-light leading-relaxed">
          Always happy to discuss product strategy, discovery, or simply exchange ideas about building better products.
        </p>
        
        <div className="flex flex-col gap-6 items-start">
          <a 
            href="mailto:laure.vitry@gmail.com" 
            className="group flex items-center gap-3 text-lg md:text-xl font-medium text-zinc-800 hover:text-[#2A4B6A] transition-colors"
          >
            <Mail className="w-6 h-6 text-zinc-800 group-hover:text-[#2A4B6A] transition-colors" strokeWidth={1.5} />
            <span>laure.vitry@gmail.com</span>
            <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out group-hover:text-[#2A4B6A]" strokeWidth={1.5} />
          </a>

          {/* Lien direct vers le PDF dans un nouvel onglet */}
          <a 
            href="./CV_EN_Laure_Vitry_final.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-lg md:text-xl font-medium text-zinc-800 hover:text-[#2A4B6A] transition-colors text-left"
          >
            <FileText className="w-6 h-6 text-zinc-800 group-hover:text-[#2A4B6A] transition-colors" strokeWidth={1.5} />
            <span>Resume / CV</span>
            <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out group-hover:text-[#2A4B6A]" strokeWidth={1.5} />
          </a>

          <a 
            href="https://www.linkedin.com/in/lvitry/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-lg md:text-xl font-medium text-zinc-800 hover:text-[#2A4B6A] transition-colors"
          >
            <Linkedin className="w-6 h-6 text-zinc-800 group-hover:text-[#2A4B6A] transition-colors" strokeWidth={1.5} />
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out group-hover:text-[#2A4B6A]" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;