import { Project } from './types';

const ACCENT_BLUE = '#2A4B6A';

export const PROJECTS: Project[] = [
  {
    id: 'manoclub',
    title: 'ManoClub',
    subtitle: 'B2C & B2B Loyalty Program',
    year: '2025',
    category: 'ManoMano',
    imageUrl: 'https://picsum.photos/800/800?random=1',
    color: ACCENT_BLUE,
    description: 'A unified loyalty ecosystem driving customer lifetime value across B2C & B2B segments.'
  },
  {
    id: 'superpro',
    title: 'SuperPro',
    subtitle: 'B2B Free Delivery Subscription',
    year: '2025',
    category: 'ManoMano',
    imageUrl: 'https://picsum.photos/800/800?random=2',
    color: ACCENT_BLUE,
    description: 'A core retention service designed to remove delivery friction for professional customers.'
  },
  {
    id: 'gobelins',
    title: 'Algorithm Control',
    subtitle: 'Product Research · Streaming Platforms',
    year: '2025',
    category: 'SPIDEO',
    imageUrl: 'https://picsum.photos/800/800?random=3',
    color: ACCENT_BLUE,
    description: 'Transforming black-box recommendation systems into transparent, user-controlled discovery experiences.'
  },
  {
    id: 'chakras',
    title: 'Reconnection Platform',
    subtitle: 'Entrepreneurial Product',
    year: '2025',
    category: 'CHAKRAS',
    imageUrl: 'https://picsum.photos/800/800?random=4',
    color: ACCENT_BLUE,
    description: 'An alternative to social performance: helping users connect with themselves before connecting with others.'
  },
  {
    id: 'research',
    title: 'Product Ops Research',
    subtitle: 'PM & Designer Collaboration in Product Teams',
    year: '2025',
    category: 'Gobelins Paris',
    imageUrl: 'https://picsum.photos/800/800?random=5',
    color: ACCENT_BLUE,
    description: 'An analysis of PM-Designer dynamics and their impact on product performance.'
  },
  {
    id: 'ai-personalization',
    title: 'AI Experimentation',
    subtitle: 'Online Experience Optimisation',
    year: '2024',
    category: 'Lanvin',
    imageUrl: 'https://picsum.photos/800/800?random=6',
    color: ACCENT_BLUE,
    description: 'Scaling a continuous A/B testing framework to optimize cross-channel user journeys with AI.'
  },
  {
    id: 'clienteling',
    title: 'Clienteling App',
    subtitle: 'B2E Sales Enablement',
    year: '2024',
    category: 'Lanvin',
    imageUrl: 'https://picsum.photos/800/800?random=7',
    color: ACCENT_BLUE,
    description: 'Transforming in-store sales patterns through data-driven clienteling.'
  }
];

export const NAV_LINKS = [
  { label: 'WORK', href: '#work' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];