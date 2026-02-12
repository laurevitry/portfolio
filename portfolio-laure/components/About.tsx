import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-8 md:px-16 max-w-4xl">
      <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">About</h2>
      <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-zinc-800">
        <p>
          I’m a Product Manager with 7+ years of experience, having evolved from <strong>growth-focused roles</strong> into <strong>end-to-end product ownership</strong>. I enjoy working at the intersection of <strong>design, tech and business</strong>, building products people <strong>adopt, come back to, and that drive measurable business outcomes.</strong>
        </p>
        <p>
          I’ve led products across <strong>B2C, B2B and B2E platforms</strong>, often in <strong>international</strong> and <strong>complex environments</strong>. I’m comfortable navigating multiple stakeholders and systems, and I naturally focus on <strong>bringing clarity, structure and alignment</strong> where things get messy.
        </p>
        <p>
          With a background in design and a strong <strong>data mindset</strong>, I believe in <strong>continuous discovery, experimentation and feedback loops</strong> as the best way to improve products over time. I also use <strong>AI tools as part of my product workflows</strong> to speed up research, synthesis and decision-making.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-zinc-100 mt-12">
          <div>
            <h3 className="font-bold text-sm uppercase mb-4 text-zinc-900">Expertise</h3>
            <ul className="text-sm text-zinc-500 space-y-2">
              <li>Product Strategy</li>
              <li>Discovery & Problem Framing</li>
              <li>Roadmap & Backlog Prioritization</li>
              <li>Experimentation & A/B Testing</li>
              <li>Systems Thinking</li>
              <li>Data-Informed Growth</li>
              <li>OKRs & Outcome-Driven Delivery</li>
              <li>AI-Assisted Product Thinking</li>
              <li>B2B, B2C & B2E Platforms</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase mb-4 text-zinc-900">Education</h3>
            <ul className="text-sm text-zinc-500 space-y-2">
              <li>Gobelins Paris</li>
              <li>ESCP Europe Paris</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;