import React from 'react';

export interface ProjectDetails {
  intro: string;
  overviewTitle?: string;
  overview: {
    label: string;
    value: string;
  }[];
  context: string;
  objectives: {
    title: string;
    content: string[];
  }[];
  approach: {
    step: string;
    description: string;
  }[];
  features?: {
    title: string;
    description: string;
  }[];
  constraints: {
    title: string;
    description: string;
  }[];
  results: (string | { title: string; content: string })[];
  quote?: string; // Anchor Insight or key takeaway
}

export interface Project {
  id: string;
  title: string;
  detailTitle?: string;
  subtitle: string;
  year: string;
  category: string;
  imageUrl: string;
  color: string; // Dynamic hover color
  component?: React.ReactNode;
  description?: string;
  details?: ProjectDetails;
}

export interface NavItem {
  label: string;
  href: string;
}