import React from 'react';
import { ArrowLeft, Printer, Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface ResumeViewProps {
  onClose: () => void;
}

const ResumeView: React.FC<ResumeViewProps> = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-0 md:py-12 px-0 md:px-4 print:bg-white print:p-0">
      {/* Actions bar (hidden during print) */}
      <div className="max-w-[1000px] mx-auto mb-4 flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 rounded-lg shadow-sm border border-gray-100 print:hidden">
        <button 
          onClick={onClose}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </button>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
        >
          <Printer size={16} /> Download as PDF / Print
        </button>
      </div>

      <div className="max-w-[1000px] mx-auto bg-white shadow-2xl print:shadow-none print:max-w-none min-h-[1400px] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[1400px]">
          
          {/* LEFT COLUMN (Sidebar) */}
          <aside className="md:col-span-4 p-10 md:p-12 border-r border-zinc-100 flex flex-col gap-10">
            {/* Header / Identity */}
            <div className="flex flex-col gap-8">
              {/* Photo Placeholder - Same aspect as screenshot */}
              <div className="w-full aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden border border-zinc-100">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                  alt="Laure Vitry" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              
              <div>
                <h1 className="text-4xl font-bold uppercase tracking-tighter text-[#1e3a5f] leading-[0.9] mb-4">LAURE VITRY</h1>
                <h2 className="text-[#3b82f6] font-bold uppercase tracking-[0.2em] text-[13px]">PRODUCT MANAGER</h2>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 text-[13px] text-zinc-700">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-zinc-400" />
                <span className="font-medium text-zinc-900">06 37 48 99 13</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-zinc-400" />
                <a href="mailto:laure.vitry@gmail.com" className="font-medium text-zinc-900 hover:text-blue-600 underline underline-offset-2">laure.vitry@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-zinc-400" />
                <span className="font-medium text-zinc-900">Paris 75009</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin size={14} className="text-zinc-400" />
                <span className="font-medium text-zinc-900">linkedin.com/in/lvitry</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={14} className="text-zinc-400" />
                <span className="font-medium text-zinc-900">medium.com/@laure.vitry</span>
              </div>
              <p className="pt-4 text-[11px] text-zinc-400 italic">References available upon request.</p>
            </div>

            <div className="h-px bg-zinc-200 w-full"></div>

            {/* Professional Summary */}
            <section>
              <h3 className="text-[12px] font-bold uppercase tracking-widest mb-6 text-zinc-900 border-b border-zinc-900 pb-1">PROFESSIONAL SUMMARY</h3>
              <p className="text-[12px] text-zinc-600 leading-relaxed text-justify font-medium">
                I bring product, design, and business together to deliver <span className="text-[#3b82f6]">user-centered</span> experiences that create <span className="text-zinc-900 font-bold">impact</span> for both people and organizations. With 7 years in product, growth CRM and design training at Gobelins, I clarify complexity with an approach that is results-oriented, co-creative, and open to feedback. I thrive in international, cross-functional teams focused on experimentation, learning, and collaboration.
              </p>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-[12px] font-bold uppercase tracking-widest mb-6 text-zinc-900 border-b border-zinc-900 pb-1">SKILLS</h3>
              <ul className="space-y-1.5 text-[12px] text-zinc-600 font-medium">
                <li>- Product Strategy & Team Leadership</li>
                <li>- Opportunity Identification & Value Definition</li>
                <li>- Roadmap & Backlog Prioritization (RICE, MoSCoW)</li>
                <li>- User Research, Discovery & Design Thinking</li>
                <li>- Agile Product Management (SAFe, Scrum, Kanban)</li>
                <li>- Experimentation, A/B Testing & Data Analytics</li>
                <li>- Problem Solving & Decision Making</li>
                <li>- Stakeholder Communication & Alignment</li>
                <li>- Active Listening & Attention to detail</li>
              </ul>
            </section>

            {/* Technical Skills */}
            <section>
              <h3 className="text-[12px] font-bold uppercase tracking-widest mb-6 text-zinc-900 border-b border-zinc-900 pb-1">TECHNICAL SKILLS</h3>
              <ul className="space-y-4 text-[12px] text-zinc-600 font-medium">
                <li><span className="font-bold text-zinc-900">Languages:</span> French (native), English (fluent)</li>
                <li><span className="font-bold text-zinc-900">Collaboration:</span> Jira, Confluence, Miro, Notion</li>
                <li><span className="font-bold text-zinc-900">Analytics:</span> Amplitude, Metabase, SQL, Hotjar</li>
                <li><span className="font-bold text-zinc-900">Design:</span> Figma, Canva</li>
                <li><span className="font-bold text-zinc-900">AI tools:</span> ChatGPT, NotebookLM, Lovable</li>
              </ul>
            </section>
          </aside>

          {/* RIGHT COLUMN (Content) */}
          <main className="md:col-span-8 p-10 md:p-14 bg-white flex flex-col gap-12">
            
            {/* Experience Section */}
            <section>
              <h3 className="bg-[#f1f5f9] text-[#1e3a5f] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.25em] mb-10 w-full inline-block">PROFESSIONAL EXPERIENCE</h3>
              
              <div className="space-y-12">
                {/* ManoMano */}
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-3">
                    <h4 className="font-extrabold text-[#1e3a5f] text-[15px] uppercase tracking-tight">PRODUCT MANAGER | ManoMano</h4>
                    <span className="text-[12px] font-bold text-[#3b82f6] tracking-tight whitespace-nowrap">August 2024 - September 2025</span>
                  </div>
                  <p className="text-zinc-900 text-[13px] font-bold mb-4 leading-snug">
                    ▹ Led the Loyalty product domain on a leading DIY marketplace (B2B / B2C), driving retention, revenue, and user engagement at scale.
                  </p>
                  <ul className="text-[12px] text-zinc-600 space-y-1.5 mb-5 pl-1">
                    <li>- Led web and app roadmaps across discovery, delivery, and OKR-driven trade-offs.</li>
                    <li>- Analyzed user and feature KPIs to inform product decisions.</li>
                    <li>- Led cross-functional teams across Engineering (6 front & back, international), Design (2), Business (8), and Data (1).</li>
                    <li>- Conducted user research through interviews and focus groups.</li>
                  </ul>
                  <div className="bg-zinc-50 p-4 rounded-sm">
                    <span className="text-[11px] font-bold uppercase text-zinc-900 block mb-2 tracking-wider">Key results:</span>
                    <ul className="text-[12px] text-zinc-700 space-y-1 grid grid-cols-1 md:grid-cols-2 gap-x-6">
                      <li>• Loyalty & wallet: <span className="font-bold">+10% revenue</span>, <span className="font-bold">+16% TopMembres</span></li>
                      <li>• Subscription: <span className="font-bold">+1,000 subscribers</span>, <span className="font-bold">+40% sign-ups</span></li>
                      <li>• Coupons: 2+ campaigns/month, boosted AOV</li>
                      <li>• CRM: <span className="font-bold">20+ workflows</span>, 20M emails & 13M push/month</li>
                    </ul>
                  </div>
                </div>

                {/* Lanvin */}
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-3">
                    <h4 className="font-extrabold text-[#1e3a5f] text-[15px] uppercase tracking-tight">LIFECYCLE PRODUCT MANAGER | Lanvin</h4>
                    <span className="text-[12px] font-bold text-[#3b82f6] tracking-tight whitespace-nowrap">March 2022 - April 2024</span>
                  </div>
                  <p className="text-zinc-900 text-[13px] font-bold mb-4 leading-snug">
                    ▹ Drove the redesign of the customer lifecycle and product strategy across retail and digital, strengthening omnichannel performance for a luxury brand.
                  </p>
                  <ul className="text-[12px] text-zinc-600 space-y-1.5 mb-4 pl-1">
                    <li>- Owned the internal B2E Clienteling App roadmap, achieving <span className="font-bold text-zinc-800">+80% WAU</span> and <span className="font-bold text-zinc-800">+30% AOV</span> (3 months).</li>
                    <li>- Optimized e-commerce journeys with AI-powered personalization, driving <span className="font-bold text-zinc-800">+34% CVR</span> and 20x ROI.</li>
                    <li>- Defined and delivered data and architecture initiatives to support product decisions.</li>
                    <li>- Orchestrated omnichannel lifecycle initiatives by launching 10+ automated workflows.</li>
                    <li>- Managed and mentored 1 Project Manager and 1 intern.</li>
                  </ul>
                </div>

                {/* Rouje */}
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-3">
                    <h4 className="font-extrabold text-[#1e3a5f] text-[15px] uppercase tracking-tight">GROWTH CRM MANAGER | Rouje</h4>
                    <span className="text-[12px] font-bold text-[#3b82f6] tracking-tight whitespace-nowrap">December 2019 - March 2022</span>
                  </div>
                  <p className="text-zinc-900 text-[13px] font-bold mb-4 leading-snug">
                    ▹ Built and led the CRM department, driving customer lifecycle and e-commerce growth for a fashion DNVB.
                  </p>
                  <ul className="text-[12px] text-zinc-600 space-y-1.5 pl-1">
                    <li>- Scaled the opt-in database by <span className="font-bold text-zinc-800">2.5x</span> through multi-channel acquisition.</li>
                    <li>- Led email & SMS lifecycle initiatives: <span className="font-bold text-zinc-800">+5 pp open rate</span>, <span className="font-bold text-zinc-800">+1.5 pp click rate</span>, 3.5x revenue growth.</li>
                    <li>- Designed 10+ customer segmentations and 15+ automated workflows.</li>
                    <li>- Launched and iterated on a referral program, optimizing the user experience.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h3 className="bg-[#f1f5f9] text-[#1e3a5f] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.25em] mb-10 w-full inline-block">EDUCATION</h3>
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                  <div>
                    <h4 className="font-extrabold text-[#1e3a5f] text-[14px] uppercase tracking-tight">GOBELINS PARIS</h4>
                    <p className="text-[13px] text-zinc-600 italic">Master’s in Digital Product & Service Design</p>
                  </div>
                  <span className="text-[12px] font-bold text-zinc-400">Sept 2024 - Sept 2025</span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                  <div>
                    <h4 className="font-extrabold text-[#1e3a5f] text-[14px] uppercase tracking-tight">ESCP EUROPE PARIS</h4>
                    <p className="text-[13px] text-zinc-600 italic">Master’s in Marketing & Communication</p>
                  </div>
                  <span className="text-[12px] font-bold text-zinc-400">Sept 2017 - Sept 2018</span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                  <div>
                    <h4 className="font-extrabold text-[#1e3a5f] text-[14px] uppercase tracking-tight">UNIVERSITÉ D’ANGERS</h4>
                    <p className="text-[13px] text-zinc-600 italic">Master’s in Organizational Engineering & Management</p>
                  </div>
                  <span className="text-[12px] font-bold text-zinc-400">Sept 2014 - Sept 2017</span>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ResumeView;