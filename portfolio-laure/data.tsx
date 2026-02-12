import { Project } from './types';
import ManoClubPreview from './components/ManoClubPreview';
import SuperProPreview from './components/SuperProPreview';
import ProductResearchPreview from './components/ProductResearchPreview';
import AlgorithmControlPreview from './components/AlgorithmControlPreview';
import ReconnectionPlatformPreview from './components/ReconnectionPlatformPreview';

const ACCENT_BLUE = '#2A4B6A'; // Deep Abyss Blue

export const PROJECTS: Project[] = [
  {
    id: 'manoclub',
    title: 'ManoClub',
    subtitle: 'B2C & B2B Loyalty Program',
    year: '2025',
    category: 'ManoMano',
    imageUrl: 'https://images.unsplash.com/photo-1464454709131-ffd692591ee5?q=80&w=1200&auto=format&fit=crop',
    color: ACCENT_BLUE,
    component: <ManoClubPreview />,
    description: 'A unified loyalty ecosystem driving customer lifetime value across B2C & B2B segments.',
    details: {
      intro: "Defined the vision and launched ManoMano’s first B2C & B2B loyalty program for Europe’s leading DIY marketplace (20M+ monthly visitors), driving repeat purchase and customer lifetime value.\nDesigned a unified cashback wallet and the end-to-end program architecture (tiers, thresholds, value structure), deployed across web & app and adopted by 4.5M+ customers.",
      overview: [
        { label: 'Duration', value: '7 months' },
        { label: 'Team', value: '1 PM, 6 engineers, 2 designers, 1 data analyst, 8 business stakeholders' },
        { label: 'Scope', value: 'Loyalty program & wallet · Web & App · B2C & B2B' },
        { label: 'Markets', value: 'France (MVP) with EU scalability in mind' },
        { label: 'Tech context', value: 'New wallet system + Legacy B2B loyalty stack' },
        { label: 'Role', value: 'Product vision, discovery, strategy, system architecture, delivery' },
        { label: 'KPIs', value: 'Repeat purchase · Conversion uplift · Incremental revenue' }
      ],
      context: "ManoMano aimed to accelerate growth among its highest-value customers across both B2C and B2B, who represented only 9% of the user base but generated 45% of total revenue. The existing B2B loyalty system was complex, low-performing and not scalable, while no loyalty experience existed for B2C users.\n\nAt the same time, market insights showed that loyalty programs had become standard in the DIY sector, with 78% of shoppers enrolled in at least one program. As a result, ManoMano needed a simple, unified and high-impact solution to drive repeat purchase, retention and customer lifetime value across both B2C and B2B.",
      objectives: [
        { 
          title: 'Business', 
          content: ['Increase repeat purchase, retention and customer lifetime value across both B2C and B2B.'] 
        },
        { 
          title: 'Product Foundations', 
          content: [
            'Replace the underperforming B2B loyalty system.',
            'Introduce the first loyalty experience for B2C customers.',
            'Design a unified, scalable loyalty architecture (tiers, thresholds, benefits).'
          ] 
        },
        { 
          title: 'Competitive Differentiation', 
          content: ['Create a more generous value model by replacing coupons with a scalable cashback wallet.'] 
        },
        { 
          title: 'Experience & Scalability', 
          content: ['Deliver a simple, frictionless experience deployable across web & app.', 'Ensure flexibility for future EU expansion.'] 
        }
      ],
      approach: [
        { step: 'Discovery & Framing', description: 'Combined data analysis, user research (Pros & DIY experts) and market benchmarks to identify key friction points and define cross-segment opportunities.' },
        { step: 'Product Vision & System Design', description: 'Defined a unified loyalty vision and designed the end-to-end program architecture, shifting from coupons to a cashback wallet–based generosity system.' },
        { step: 'MVP & Delivery', description: 'Prioritised a clear MVP to validate impact quickly, while managing technical complexity and coexistence with the legacy B2B program.' },
        { step: 'Launch & Iteration', description: 'Launched the MVP in France and iterated based on performance tracking, user feedback and CRM activations.' }
      ],
      constraints: [
        { title: 'Coexistence of Systems', description: 'Launched ManoClub in France while maintaining legacy B2B program elsewhere.' },
        { title: 'Cannibalisation Risks', description: 'Balanced benefits with existing programs (e.g. SuperPro free delivery) to prevent overlap.' },
        { title: 'Wallet Fraud', description: 'Addressed risks like cashback deduction after returns with specific operational trade-offs.' },
        { title: 'Time-to-market', description: 'Prioritised a focused MVP over exhaustive feature sets.' },
        { title: 'Customer Migration', description: 'Managed the transition of existing coupon balances into the new wallet system, balancing fairness, trust and time-to-market.' },
        { title: 'Internal Enablement', description: 'Ensured clear internal alignment and customer support enablement to handle the coexistence of two loyalty systems without customer confusion.' }
      ],
      results: [
        '×2 conversion within 2 months after launch.',
        '+10% incremental revenue generated by the loyalty program within 6 months.',
        '+16% growth of Top Members in 6 months.',
        '4.5M+ customers reached, with rapid adoption across web and app.',
        'Wallet became a central activation lever used across CRM and onsite.'
      ]
    }
  },
  {
    id: 'superpro',
    title: 'SuperPro',
    subtitle: 'B2B Free Delivery Subscription',
    year: '2025',
    category: 'ManoMano',
    imageUrl: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=1200&auto=format&fit=crop',
    color: ACCENT_BLUE,
    component: <SuperProPreview />,
    description: 'A core retention service designed to remove delivery friction for high-value professional customers.',
    details: {
      intro: "Designed and launched SuperPro, a B2B subscription product for ManoMano, Europe’s leading DIY marketplace (20M+ monthly visitors), offering free delivery to professional customers.\nBuilt as a core retention lever to increase purchase frequency and long-term value among Pros, while complementing ManoClub’s loyalty mechanics.",
      overview: [
        { label: 'Duration', value: '5 months' },
        { label: 'Team', value: '1 PM, 6 engineers, 2 designers, 1 data analyst, 8 business stakeholders' },
        { label: 'Scope', value: 'B2B Subscription · Web & App' },
        { label: 'Markets', value: 'France' },
        { label: 'Tech context', value: '0→1 product · Subscription engine & pricing logic' },
        { label: 'Role', value: 'Design, delivery, maintenance and improvement' },
        { label: 'KPIs', value: 'Subscription conversion · Activation · Churn' }
      ],
      context: "In the highly competitive Pro market, delivery costs are a major barrier to repeat purchase. Professional customers frequently order heavy or bulky items, leading to high shipping fees that often push them back to physical retailers.\n\nAt the same time, ManoMano was looking to evolve beyond a plus marketplace model by building a portfolio of services generating recurring revenue (ARR). SuperPro was conceived as the first service offering, designed to remove delivery friction for Pros while introducing a sustainable subscription model within a complex marketplace and logistics environment.",
      objectives: [
        { 
          title: 'Marketplace & operations', 
          content: ['Standardise free delivery conditions for Pro customers across a diverse seller ecosystem, ensuring consistent rules and operational clarity.'] 
        },
        { 
          title: 'Product & system design', 
          content: [
            'Design a sustainable subscription model (pricing, eligibility, rules) that balances customer value with shipping cost impact in a marketplace context.',
            'Lay the foundations of a services layer, enabling future subscription-based offerings beyond delivery.'
          ] 
        },
        { 
          title: 'Business outcomes', 
          content: [
            'Increase purchase frequency and long-term retention among B2B customers through a subscription-based model.',
            'Introduce a recurring revenue stream (ARR) complementary to transactional marketplace revenue.'
          ] 
        },
        { 
          title: 'Customer value', 
          content: ['Remove delivery cost as a key friction point for Pro customers ordering heavy or bulky items.'] 
        }
      ],
      approach: [
        { step: 'Product framing & subscription model', description: 'Framed the subscription problem by analysing Pro purchase patterns, shipping cost drivers and margin impact. Defined the SuperPro value proposition, pricing options and eligibility thresholds to balance customer value and economic sustainability.' },
        { step: 'System & delivery', description: 'Designed and delivered the subscription logic and shipping fee override system across a multi-seller catalog, ensuring reliable application at checkout on both web and mobile app.' },
        { step: 'Iteration, pricing decisions & activation', description: 'Iterated on the subscription model based on adoption and usage data: tested monthly vs annual plans, consolidated to an annual-only offer, and refined pricing through targeted promotions. In parallel, improved activation and conversion with in-checkout messaging and “Add to Cart” upsell features.' }
      ],
      constraints: [
        { title: 'Shipping cost vs customer value', description: 'Balanced the cost of “free” delivery with the need to remain attractive for Pro customers ordering heavy or bulky items.' },
        { title: 'Abuse & edge cases', description: 'Anticipated non-optimal usage patterns (order splitting, small baskets), balancing safeguards with a frictionless customer experience.' },
        { title: 'Pricing simplicity vs optimisation', description: 'Tested monthly vs annual plans and promotional pricing before converging toward a simpler, annual-only subscription.' },
        { title: 'Value overlap with loyalty programs', description: 'Coordinated SuperPro benefits with ManoClub incentives to avoid cannibalisation and maintain a coherent value proposition.' },
        { title: 'ARR ambition vs adoption', description: 'Balanced the goal of building a recurring revenue stream with accessible pricing to drive early adoption.' }
      ],
      results: [
        '1,000+ active subscribers reached in France within the first year after launch.',
        '+40% increase in new subscriptions within one month following the launch of the “Add to Cart” activation feature.',
        'Increased order frequency among subscribed Pro customers, establishing SuperPro as a core component of the ManoMano Pro value proposition.'
      ]
    }
  },
  {
    id: 'gobelins',
    title: 'Algorithm Control',
    subtitle: 'Product Research · Streaming Platforms',
    year: '2025',
    category: 'SPIDEO',
    imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1200&auto=format&fit=crop',
    color: ACCENT_BLUE,
    component: <AlgorithmControlPreview />,
    description: 'Transforming black-box recommendation systems into transparent, user-controlled discovery experiences.',
    details: {
      intro: "Led an end-to-end product research project for Spideo, a B2B recommendation engine provider working with major streaming platforms.\nExplored how users perceive, trust and interact with recommendation algorithms, and translated research insights into concrete product directions to move beyond \"black box\" recommendations.",
      overviewTitle: "Project Overview",
      overview: [
        { label: 'Duration', value: '3 months' },
        { label: 'Team', value: 'Product Manager · UX/UI Designers' },
        { label: 'Scope', value: 'Product discovery · User research · Algorithm transparency · Streaming UX' },
        { label: 'Client context', value: 'Spideo — B2B recommendation platform for streaming services' },
        { label: 'Methods', value: 'Desk research · Benchmark · Qual & Quant · UX audit · Co-design · Prototyping' },
        { label: 'Role', value: 'Research lead · Problem framing · Insight synthesis · Recommendations' },
        { label: 'Deliverables', value: 'Research report · Personas · UX audit · Prototype (Figma)' }
      ],
      context: "Streaming platforms rely heavily on recommendation algorithms to drive content discovery, yet many users experience growing frustration around content overload, hide/seek patterns and repetitive suggestions. While algorithms optimise engagement, they are often perceived as black boxes, reducing users’ sense of control and exploration.\n\nSpideo explored how algorithm transparency and user control could improve discovery and trust without harming recommendation performance. The challenge was to understand whether users actually want to interact with their algorithm — and how such interactions could create value while remaining simple, intuitive and scalable.",
      objectives: [
        { 
          title: 'Research objectives', 
          content: [
            'Understand how users perceive recommendation algorithms and their role in content discovery.',
            'Identify key frustrations, behaviours and unmet needs across streaming journeys.'
          ] 
        },
        { 
          title: 'Product objectives', 
          content: [
            'Explore product concepts that balance personalisation, transparency and reconciliation with human curiosity.',
            'Validate whether giving users more control over recommendations creates real value.'
          ] 
        },
        { 
          title: 'Business objectives', 
          content: [
            'Provide Spideo with actionable insights to support product differentiation in a saturated market.',
            'Reduce discovery friction while preserving algorithmic performance.'
          ] 
        }
      ],
      approach: [
        { step: 'Market & Desk Research', description: 'Analysed the streaming ecosystem, recommendation algorithms and discovery patterns across the audiovisual market. Conducted a competitive benchmark of recommendation engine providers.' },
        { step: 'Qualitative Research', description: 'Conducted in-depth qualitative interviews to explore user frustrations, motivations and mental models around content discovery and algorithmic recommendations.' },
        { step: 'Quantitative Validation', description: 'Ran a quantitative survey (100+ respondents) to validate qualitative insights at scale and measure interest in transparency and control mechanisms.' },
        { step: 'UX Audit, Feature Design & User Testing', description: 'Audited Spideo’s existing solution, then designed and prototyped new recommendation features applied to a MyCanal-like interface. Validated concepts through user testing to assess usability, clarity and perceived value.' },
        { step: 'Synthesis & Restitution', description: 'Synthesised findings into key insights, personas and behavioural patterns. Delivered a structured research restitution to align stakeholders.' }
      ],
      constraints: [
        { title: 'User control vs cognitive load', description: 'Giving users control over recommendation algorithms risks increasing complexity. Concepts had to remain intuitive and optional.' },
        { title: 'Transparency vs performance', description: 'Improving explainability needed to preserve recommendation quality and avoid disrupting ranking logic.' },
        { title: 'Research depth vs applicability', description: 'Balancing a rigorous research methodology with actionable, product-ready recommendations for a real world B2B client.' }
      ],
      results: [
        { title: 'Core drivers of frustration', content: 'Identified four primary friction points: content overload, long time-to-content, algorithmic lock-in and permanence of filter bubbles.' },
        { title: 'Demand for transparency', content: '75% of users expressed interest in influencing or understanding their recommendations, confirming that personalisation alone is no longer sufficient.' },
        { title: 'Limits of algorithm-only discovery', content: 'Users consistently trusted social signals and word-of-mouth cues more than algorithmic suggestions, requiring more human-like patterns.' },
        { title: 'Research-backed vision', content: 'Translated insights into clear personas and UX concepts, providing Spideo with a concrete, user-validated product vision.' }
      ]
    }
  },
  {
    id: 'research',
    title: 'Product Ops Research',
    subtitle: 'PM & Designer Collaboration in Product Teams',
    year: '2025',
    category: 'Gobelins Paris',
    imageUrl: 'https://images.unsplash.com/photo-1456324504439-367eca35f0ee?q=80&w=1200&auto=format&fit=crop',
    color: ACCENT_BLUE,
    component: <ProductResearchPreview />,
    description: 'An analysis of PM-Designer dynamics and their impact on long-term product performance.',
    details: {
      intro: "Conducted an in-depth product research project on PM–Designer collaboration, based on field interviews and real product team observations.\nIdentified key collaboration patterns and translated insights into actionable recommendations to improve product decision-making and long-term performance.",
      overview: [
        { label: 'Duration', value: '6 months' },
        { label: 'Scope', value: 'PM–Designer collaboration · Product decision-making · Product vision & strategy · Team dynamics' },
        { label: 'Methods', value: 'Desk research · Qualitative interviews · Field observations · Quantitative survey analysis' },
        { label: 'Participants', value: 'Product Managers, Designers, Leads and Product Directors' },
        { label: 'Role', value: 'Research lead (framing, interviews, analysis & synthesis)' },
        { label: 'Outputs', value: 'Research report, actionable recommendations, published article (Medium)' }
      ],
      context: "In many product organisations, Product Managers and Designers are expected to collaborate closely, yet this partnership often remains fragile. Delivery pressure, unclear ownership and organisational constraints can turn the PM–Designer relationship into a source of friction rather than a performance lever.\nAs product teams scale, these tensions directly impact decision-making quality, product coherence and long-term value creation. This research project was grounded in real product teams to better understand how collaboration actually works in practice, beyond role definitions and processes.",
      objectives: [
        { 
          title: 'Research Objectives', 
          content: [
            'Understand how PMs and Designers actually collaborate day to day in product teams.',
            'Identify recurring friction points and collaboration patterns affecting product vision and decision-making.',
            'Analyse how these dynamics evolve with team maturity and organisational context.'
          ] 
        },
        { 
          title: 'Product & Organisational Objectives', 
          content: [
            'Turn research findings into practical recommendations teams can apply in their daily work.',
            'Clarify what makes a PM–Designer duo effective beyond formal role definitions.',
            'Help product teams improve alignment, decision-making and product quality over time.'
          ] 
        }
      ],
      approach: [
        { step: 'Desk research & problem framing', description: 'Started with extensive desk research to frame the topic and challenge assumptions, drawing from articles, books, podcasts, and social listening within the product and design community.' },
        { step: 'Qualitative field research', description: 'Conducted qualitative interviews and field observations within product teams to capture real collaboration dynamics and day-to-day practices.' },
        { step: 'Quantitative validation', description: 'Complemented internal qualitative insights with a quantitative survey to compare collaboration patterns across different product contexts.' },
        { step: 'Analysis & Synthesis', description: 'Synthesised insights into concrete recommendations and a practical framework to improve collaboration and decision-making.' }
      ],
      constraints: [
        { title: 'Recruitment bias', description: 'Ensuring diversity in project profiles to capture a representative sample of team dynamics.' },
        { title: 'Actionability', description: 'Balancing deep structural insights with concrete recommendations that teams could realistically apply.' }
      ],
      results: [
        { title: 'Autonomy over setup', content: 'Product organisations shape collaboration, but rarely determine it. Autonomy and shared ownership matter more than setup.' },
        { title: 'Balanced duos', content: 'Effective collaboration depends on curiosity, seniority and willingness to share responsibility rather than strict role boundaries.' },
        { title: 'Vision as engine', content: 'When vision and strategy are clear, collaboration becomes natural. When they are missing, teams fall into execution mode.' }
      ]
    }
  },
  {
    id: 'chakras',
    title: 'Reconnection Platform',
    subtitle: 'Entrepreneurial Product',
    year: '2025',
    category: 'CHAKRAS',
    imageUrl: 'https://images.unsplash.com/photo-1518199266791-c399a95d4695?q=80&w=1200&auto=format&fit=crop',
    color: ACCENT_BLUE,
    component: <ReconnectionPlatformPreview />,
    description: 'An alternative to social performance: helping users connect with themselves before connecting with others.',
    details: {
      intro: "Designed a 0→1 entrepreneurial product addressing emotional loneliness in a hyperconnected world, developed as part of an entrepreneurship program at Gobelins Paris.\nChakras is a reconnection platform helping users reconnect with themselves before building meaningful relationships with others — not a dating app, but a reconnection app.",
      overview: [
        { label: 'Duration', value: '3 months' },
        { label: 'Team', value: 'Product · UX/UI Design · Branding · Business & Finance (Startup-like)' },
        { label: 'Scope', value: '0→1 product · Discovery · Research · Strategy · UX · Branding · Business model' },
        { label: 'Context', value: 'Entrepreneurial project developed at Gobelins Paris' },
        { label: 'Role', value: 'Product strategy · Research · Problem framing · Product definition · Prototyping' },
        { label: 'Business model', value: 'Subscription-based (App + Curated community events)' },
        { label: 'Deliverables', value: 'Research insights · Product vision · Mobile app prototype · Brand identity · GTM plan' }
      ],
      context: "Loneliness is increasing in modern societies, despite constant connectivity and countless opportunities to socialise. Recent studies indicate that roughly one in four people report feeling lonely, making loneliness a growing social and emotional issue.\n\nAt the same time, the number of social, dating and well-being apps continues to grow steadily (~10% growth in recent years), yet many users still experience emotional loneliness. Research quickly highlighted a key distinction: being alone is not the same as feeling lonely — emotional loneliness can persist even in active social lives. Most existing solutions focus either on facilitating encounters (dating apps) or treating symptoms (well-being tools), but rarely address the relationship individuals have with themselves. Chakras was designed to help users understand it, manage it and create healthier connections.",
      objectives: [
        { 
          title: 'Human & Social', 
          content: [
            'Help users better understand and manage emotional loneliness.',
            'Encourage healthier, more authentic relationships.'
          ] 
        },
        { 
          title: 'Product', 
          content: [
            'Design an experience centred on reconnection rather than performance or comparison.',
            'Enable meaningful IRL encounters based on shared emotional states, affinities and life moments.'
          ] 
        },
        { 
          title: 'Entrepreneurial', 
          content: [
            'Build a credible, viable 0→1 product beyond a conceptual prototype.',
            'Validate product, brand and business foundations within a short timeframe.'
          ] 
        }
      ],
      approach: [
        { step: 'Discovery & research', description: 'Desk research on loneliness, mental health and social behaviours. Guerrilla interviews and competitive benchmark (social, dating, well-being).' },
        { step: 'Problem framing & segmentation', description: 'Identification of key patterns. Selection of target population. Clear distinction between solitude and emotional loneliness.' },
        { step: 'Product strategy & concept', description: 'Value proposition definition and positioning. Feature prioritisation (MVP scope). Subscription model and monetisation hypotheses.' },
        { step: 'Design, branding & delivery', description: 'UX flows and mobile app prototyping. Brand identity and tone of voice. Community strategy. Final pitch to jury.' }
      ],
      features: [
        { title: 'Self-reflection tools', description: 'Emotional check-ins, journaling, guided introspection.' },
        { title: 'Personalised content', description: 'Based on emotional state, intentions and personal values.' },
        { title: 'Affinity-based community events', description: 'Matching users with people who share similar mindsets or life moments.' },
        { title: 'Event-first IRL connections', description: 'Favouring meaningful encounters over random or high-volume socialisation.' },
        { title: 'Subscription access', description: 'Access to the app and curated offline experiences.' }
      ],
      constraints: [
        { title: 'Emotional depth vs scalability', description: 'Designing a meaningful experience without oversimplifying a complex emotional issue.' },
        { title: 'Safety vs engagement', description: 'Avoiding addictive or performative mechanics common in social apps.' },
        { title: 'Vision vs feasibility', description: 'Balancing ambition with realistic delivery in a 3-month timeframe.' }
      ],
      results: [
        { title: 'Reframed loneliness', content: 'Validated that users can feel lonely even with active social lives, revealing a gap in existing solutions.' },
        { title: 'Self-connection prerequisite', content: 'Research showed that users want to reconnect with themselves before meeting others.' },
        { title: 'Authenticity alternative', content: 'Proposed an experience focused on authenticity, emotional safety and affinity-based IRL connections.' },
        { title: 'Complete 0→1 vision', content: 'Delivered a vision from research to business model, ready to be explored beyond an academic context.' }
      ],
      quote: "Loneliness is not a social problem, but an emotional one — and most existing products address the wrong layer."
    }
  },
  {
    id: 'clienteling',
    title: 'Clienteling App',
    subtitle: 'B2E Sales Enablement',
    year: '2024',
    category: 'Lanvin',
    imageUrl: 'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=1200&auto=format&fit=crop',
    color: ACCENT_BLUE,
    description: 'Designed and rebuilt Lanvin’s clienteling app for a global luxury retail network, starting from an unused B2E / merchant facing tool with zero adoption and turning it into a core performance lever across 15 boutiques. Built a mobile-first, data-driven sales enablement product to drive footfall, improve conversion and increase repeat business through better customer knowledge.',
    details: {
      intro: "Designed and rebuilt Lanvin’s clienteling app for a global luxury retail network, starting from an unused B2E / merchant facing tool with zero adoption and turning it into a core performance lever across 15 boutiques.\nBuilt a mobile-first, data-driven sales enablement product to drive footfall, improve conversion and increase repeat business through better customer knowledge.",
      overview: [
        { label: 'Duration', value: '12 months' },
        { label: 'Team', value: '1 PM · Retail Operations · Internal IT / Infrastructure team · External tech agency' },
        { label: 'Scope', value: 'Clienteling app · Mobile-first · B2E tool · In-store enablement' },
        { label: 'Markets', value: '15 boutiques (US & EU)' },
        { label: 'Tech context', value: 'Legacy clienteling app · Salesforce-based stack · 2 POS · 2 CMS · Unstable data flows' },
        { label: 'Role', value: 'Product vision · Discovery & field research · Product strategy · Roadmap & prioritisation · Delivery coordination' },
        { label: 'KPIs', value: 'Active sellers · AOV · Store revenue' }
      ],
      context: "In the post-Covid period, Lanvin faced a significant decline in in-store traffic, directly impacting store revenue across its retail network. In the luxury sector, where performance strongly depends on client relationships and personalised in-store experiences, this drop in footfall had immediate business consequences. Although a clienteling tool was already deployed, it had been fully abandoned in stores. Poor usability, unreliable data and a lack of internal ownership led to a complete loss of trust from sales teams. With no performance tracking and no perceived value on the shop floor, the product became irrelevant for sellers and failed to support retail performance. Lanvin needed to rebuild a clienteling solution that sales teams would actually trust, adopt and use as part of their daily workflow.",
      objectives: [
        { 
          title: 'Adoption & trust', 
          content: [
            'Design a B2E tool adapted to real in-store usage (fast, mobile-first).',
            'Restore trust among sales teams by delivering tangible daily value.'
          ] 
        },
        { 
          title: 'Product foundations', 
          content: [
            'Rebuild around real seller needs, automating time-consuming workflows.',
            'Ensure the tool supports rather than disrupts in-store selling.'
          ] 
        },
        { 
          title: 'Business impact', 
          content: ['Drive higher revenue through improved conversion, higher AOV and repeat business.'] 
        },
        { 
          title: 'Tech & Performance', 
          content: ['Stabilise data reliability and provide HQ/Managers with commercial monitoring tools.'] 
        }
      ],
      approach: [
        { step: 'Discovery & field immersion', description: 'Conducted on-the-ground observations and interviews in boutiques (US & EU) to understand root causes of adoption failure.' },
        { step: 'Problem framing', description: 'Identified core issues: UX not adapted to speed/mobility, unreliable data, missing enablement features, and depth of onboarding.' },
        { step: 'Roadmap & prioritisation', description: 'Structured initiatives around infrastructure stabilisation, functional UX redesign, and change management.' },
        { step: 'Delivery & Monitoring', description: 'Phased rollout with UAT validation; introduced performance dashboards for HQ and store managers.' }
      ],
      constraints: [
        { title: 'Adoption vs feature depth', description: 'Prioritised a small set of high-impact features to rebuild trust before expanding the scope.' },
        { title: 'UX speed vs data foundations', description: 'Balanced the need for a lightweight mobile experience with heavy foundational work on data infrastructure.' },
        { title: 'Change management', description: 'Compensated for limited dedicated resources through close collaboration with Retail Operations.' },
        { title: 'Global vs Local', description: 'Supported unified framework while allowing flexible rules for different POS systems and store maturity (US vs EU).' }
      ],
      results: [
        { title: 'Rapid Adoption', content: 'Adoption increased from 0% to 80% of active sellers within 3 months across the retail network.' },
        { title: 'Increased Engagement', content: 'Client contact frequency significantly increased, rebuilding regular and structured seller–customer relationships.' },
        { title: 'Commercial Impact', content: 'Active sellers generated +30% higher AOV on full-price sales and improved UPT in outlet contexts.' },
        { title: 'Commercial Steering', content: 'The app became a merchant-facing performance tool used by HQ to monitor activity and commercial impact.' }
      ]
    }
  },
  {
    id: 'ai-personalization',
    title: 'AI Experimentation',
    subtitle: 'Online Experience Optimisation',
    year: '2024',
    category: 'Lanvin',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    color: ACCENT_BLUE,
    description: 'Designed and scaled AI-powered experimentation to personalise Lanvin’s e-commerce experience in a highly competitive luxury market. Leveraged predictive recommendations, behavioural targeting and continuous A/B testing to optimise cross-channel user journeys and drive incremental revenue across multiple CMS environments.',
    details: {
      intro: "Designed and scaled AI-powered experimentation to personalise Lanvin’s e-commerce experience in a highly competitive luxury market.\nLeveraged predictive recommendations, behavioural targeting and continuous A/B testing to optimise cross-channel user journeys and drive incremental revenue across multiple CRM and onsite activations.",
      overview: [
        { label: 'Duration', value: '12 months' },
        { label: 'Team', value: '1 PM · E-commerce · CRM · Marketing · External AI platform' },
        { label: 'Scope', value: 'AI-driven personalisation · Experimentation & A/B testing · Cross-channel journey orchestration' },
        { label: 'Markets', value: 'Global e-commerce (Luxury)' },
        { label: 'Tech context', value: 'AI personalisation platform · Magento & Shopify · Cookie- and opt-in-dependent activations' },
        { label: 'Role', value: 'Product strategy · Experimentation roadmap · AI feature activation · A/B testing' },
        { label: 'KPIs', value: 'Conversion rate · Incremental revenue · ROI · Contribution to online revenue' }
      ],
      context: "In the luxury e-commerce sector, competition intensified significantly, with increasingly volatile and demanding customers expecting highly personalised and seamless online experiences. For Lanvin, digital transformation became a key lever to remain competitive and improve online performance. At the same time, customers expected not only inspirational content, but the right product combinations at the right moment, across increasingly complex user journeys. Lanvin needed to leverage AI-driven personalisation to improve relevance, conversion and engagement, while operating across two CMS platforms and within strict consent and data constraints.",
      objectives: [
        { 
          title: 'Experience & personalisation', 
          content: [
            'Deliver relevant, AI-driven personalised experiences across key e-commerce journeys.',
            'Improve product discovery and merchandising relevance.'
          ] 
        },
        { 
          title: 'Business impact', 
          content: [
            'Increase conversion rate and incremental revenue through data-driven experimentation.',
            'Turn personalisation into a measurable performance lever.'
          ] 
        },
        { 
          title: 'Experimentation & scalability', 
          content: [
            'Build a continuous experimentation framework to test, learn and scale high-impact experiences.',
            'Ensure experiments could be deployed consistently across Magento and Shopify.'
          ] 
        },
        { 
          title: 'Data, consent & activation', 
          content: [
            'Maximise cookie consent and opt-in rates to increase the reach of AI-powered experiences.',
            'Leverage a mix of profile, behavioural and predictive (lookalike) data to improve targeting accuracy.'
          ] 
        }
      ],
      approach: [
        { step: 'Segmentation & opportunity identification', description: 'Identified high-potential user segments based on profile data, purchase history, behavioural signals and churn indicators. Prioritised journeys where AI-driven personalisation could generate the highest impact.' },
        { step: 'AI experience design & A/B testing', description: 'Designed and launched AI-powered experiences, including smart product recommendations and contextual messages triggered by real-time user behaviour. Each was systematically A/B tested.' },
        { step: 'Cross-channel journey orchestration', description: 'Built cross-channel journeys combining on-site personalisation, email, SMS and push notifications, triggered by behavioural and predictive signals.' },
        { step: 'Continuous optimisation & reporting', description: 'Monitored performance continuously to refine targeting, messaging and recommendation logic. Maintained a structured experimentation roadmap.' }
      ],
      constraints: [
        { title: 'Performance vs brand image', description: 'In a luxury context, personalisation had to be subtle and relevant, avoiding overly pushy messaging to protect brand perception.' },
        { title: 'AI potential vs consent dependency', description: 'Heavily relied on cookies and opt-in consent, requiring continuous optimisation of acceptance rates to maximise reach.' },
        { title: 'Experimentation speed vs IT capacity', description: 'Internal technical capacity limited speed; leveraging an external AI platform enabled faster iteration while introducing integration constraints.' },
        { title: 'Scalability vs technical fragmentation', description: 'Running experiments across Magento & Shopify required extra coordination and constrained some activation patterns.' }
      ],
      results: [
        '+34% conversion rate increase within one year driven by AI-powered personalisation and experimentation.',
        'ROI ×20 compared to the cost of the AI platform, generated through incremental revenue.',
        'AI-driven experiences contributed to 50% of monthly online revenue, becoming a core performance driver.',
        'Established a continuous experimentation culture, embedding AI as a long-term optimisation lever.'
      ]
    }
  }
];
