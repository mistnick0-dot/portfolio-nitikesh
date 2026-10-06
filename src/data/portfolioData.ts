export interface VisualWorkItem {
  id: string;
  title: string;
  brand: string;
  type: 'REEL' | 'POST' | 'FLYER' | 'CAMPAIGN' | 'INSTAGRAM';
  image?: string;
  instagramUrl: string;
  embedUrl: string;
  shortcode: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'vertical';
  tag: string;
  platform: string;
  objective: string;
  role: string;
  tools: string[];
}

export interface ReelItem {
  id: string;
  index: string;
  title: string;
  brand: string;
  duration?: string;
  thumbnail?: string;
  instagramUrl: string;
  embedUrl: string;
  shortcode: string;
  platform: string;
}

export interface DesignWorkItem {
  id: string;
  title: string;
  brand: string;
  category: string;
  instagramUrl: string;
  embedUrl: string;
  shortcode: string;
  image?: string;
  aspect?: string;
  tools: string[];
}

export const PERSONAL_INFO = {
  name: 'Nitikesh Kanodiya',
  roleLine: 'SOCIAL MEDIA • CONTENT • MARKETING',
  heroStatement: ['CONTENT', 'THAT', 'STOPS', 'THE SCROLL.'],
  subline: 'Creating content that connects brands with people.',
  email: 'kanodiyanitikesh@gmail.com',
  phone: '9589566876',
  location: 'Indore, India',
  whatsappUrl: 'https://wa.me/919589566876',
};

export const SELECTED_WORKS: VisualWorkItem[] = [
  {
    id: 'work-1',
    title: '100% Placement Guarantee Video Campaign',
    brand: 'Malwa Institute of Science & Technology',
    type: 'REEL',
    instagramUrl: 'https://www.instagram.com/reel/Dbp56H2uNpG/',
    embedUrl: 'https://www.instagram.com/reel/Dbp56H2uNpG/embed/',
    shortcode: 'Dbp56H2uNpG',
    aspect: 'vertical',
    tag: 'PLACEMENT CAMPAIGN',
    platform: 'Instagram Reels',
    objective: 'Showcase institutional recruitment milestones and placement guarantee to build parental confidence.',
    role: 'Creator & Video Editor',
    tools: ['Instagram Reels', 'CapCut', 'Sound Design'],
  },
  {
    id: 'work-2',
    title: 'MBA, MCA & M.Tech Induction Ceremony Glimpses',
    brand: 'Malwa Institute of Science & Technology',
    type: 'REEL',
    instagramUrl: 'https://www.instagram.com/reel/DdBFe-IyfFJ/',
    embedUrl: 'https://www.instagram.com/reel/DdBFe-IyfFJ/embed/',
    shortcode: 'DdBFe-IyfFJ',
    aspect: 'vertical',
    tag: 'INDUCTION REEL',
    platform: 'Instagram Reels',
    objective: 'Highlight postgraduate student orientation, faculty address, and campus welcoming rituals.',
    role: 'Filming, Editing & Sound Curation',
    tools: ['Instagram Reels', 'CapCut', 'Event Production'],
  },
  {
    id: 'work-3',
    title: 'Smart India Hackathon Preparation & Selection Drive',
    brand: 'Malwa Institute of Science & Tech (@mist_indore)',
    type: 'REEL',
    instagramUrl: 'https://www.instagram.com/mist_indore/reel/DdmCmVss-3d/',
    embedUrl: 'https://www.instagram.com/reel/DdmCmVss-3d/embed/',
    shortcode: 'DdmCmVss-3d',
    aspect: 'vertical',
    tag: 'TECH HACKATHON',
    platform: 'Instagram (@mist_indore)',
    objective: 'Official SIH 2026 screening and student technical innovation highlights.',
    role: 'Social Media Management & Editing',
    tools: ['Canva', 'CapCut', 'Instagram Algorithm'],
  },
  {
    id: 'work-4',
    title: 'MIST Academic Excellence & Campus Admissions Campaign',
    brand: 'Malwa Institute of Science & Tech (@mist_indore)',
    type: 'POST',
    instagramUrl: 'https://www.instagram.com/mist_indore/p/Dcf_D-wyuMP/',
    embedUrl: 'https://www.instagram.com/p/Dcf_D-wyuMP/embed/',
    shortcode: 'Dcf_D-wyuMP',
    aspect: 'portrait',
    tag: 'ADMISSIONS POST',
    platform: 'Instagram (@mist_indore)',
    objective: 'Promote engineering and management degree pathways with clean institutional typography.',
    role: 'Creative Design & Copywriting',
    tools: ['Canva Pro', 'Typography', 'Social Graphics'],
  },
  {
    id: 'work-5',
    title: 'Digital Marketing & SEO Workshop for MBA & BBA',
    brand: 'Malwa Institute of Science & Tech (@mist_indore)',
    type: 'REEL',
    instagramUrl: 'https://www.instagram.com/mist_indore/reel/DV08oLYjHyp/',
    embedUrl: 'https://www.instagram.com/reel/DV08oLYjHyp/embed/',
    shortcode: 'DV08oLYjHyp',
    aspect: 'vertical',
    tag: 'WORKSHOP REEL',
    platform: 'Instagram (@mist_indore)',
    objective: 'Industry speaker workshop highlights on digital marketing, local SEO, and career skills.',
    role: 'Video Direction & Distribution',
    tools: ['CapCut Video', 'Sound Design', 'Campaign Strategy'],
  },
];

export const REELS_LIST: ReelItem[] = [
  {
    id: 'reel-1',
    index: '01',
    title: 'Campus Placement Drive Preparation — 2027 Batch',
    brand: 'Malwa Institute of Science & Technology',
    duration: '0:30',
    instagramUrl: 'https://www.instagram.com/reel/DdqKZTJyog4/',
    embedUrl: 'https://www.instagram.com/reel/DdqKZTJyog4/embed/',
    shortcode: 'DdqKZTJyog4',
    platform: 'Instagram Reels',
  },
  {
    id: 'reel-2',
    index: '02',
    title: 'B.Tech Orientation & Induction Glimpses',
    brand: 'Malwa Institute of Science & Technology',
    duration: '0:35',
    instagramUrl: 'https://www.instagram.com/reel/Dc3TEo7u0xv/',
    embedUrl: 'https://www.instagram.com/reel/Dc3TEo7u0xv/embed/',
    shortcode: 'Dc3TEo7u0xv',
    platform: 'Instagram Reels',
  },
  {
    id: 'reel-3',
    index: '03',
    title: 'Malwa Leaders Forum Podcast — Director Interview Series',
    brand: 'Malwa Institute of Science & Tech (@mist_indore)',
    duration: '0:45',
    instagramUrl: 'https://www.instagram.com/mist_indore/reel/DaxgmiFsIda/',
    embedUrl: 'https://www.instagram.com/reel/DaxgmiFsIda/embed/',
    shortcode: 'DaxgmiFsIda',
    platform: 'Instagram (@mist_indore)',
  },
  {
    id: 'reel-4',
    index: '04',
    title: 'Ganesh Chaturthi Utsav — Yuvraj of Malwa Celebrations',
    brand: 'Malwa Institute of Science & Tech (@mist_indore)',
    duration: '0:40',
    instagramUrl: 'https://www.instagram.com/mist_indore/reel/DN5eFGlDLKR/',
    embedUrl: 'https://www.instagram.com/reel/DN5eFGlDLKR/embed/',
    shortcode: 'DN5eFGlDLKR',
    platform: 'Instagram (@mist_indore)',
  },
];

export const DESIGN_WALL_ITEMS: DesignWorkItem[] = [
  {
    id: 'd-1',
    title: 'Jaro Education Campus Placement Drive Flyer',
    brand: 'Malwa Institute of Science & Technology',
    category: 'Placement Drive',
    instagramUrl: 'https://www.instagram.com/p/DdiiObyjgHX/?img_index=1',
    embedUrl: 'https://www.instagram.com/p/DdiiObyjgHX/embed/',
    shortcode: 'DdiiObyjgHX',
    tools: ['Canva Pro', 'Corporate Placement', 'Social Graphics'],
  },
  {
    id: 'd-2',
    title: 'MIST Institutional Admissions & Campus Prospectus Flyer',
    brand: 'Malwa Institute of Science & Tech (@mist_indore)',
    category: 'Admissions Campaign',
    instagramUrl: 'https://www.instagram.com/mist_indore/p/DdVRs_bMOZK/',
    embedUrl: 'https://www.instagram.com/p/DdVRs_bMOZK/embed/',
    shortcode: 'DdVRs_bMOZK',
    tools: ['Canva', 'Admissions Branding', 'Visual Hierarchy'],
  },
  {
    id: 'd-3',
    title: 'MBA Admissions Open — 6 Dual Specializations Flyer',
    brand: 'Malwa Institute of Science & Tech (@mist_indore)',
    category: 'MBA Admissions',
    instagramUrl: 'https://www.instagram.com/mist_indore/p/DaN2X9jsvpt/',
    embedUrl: 'https://www.instagram.com/p/DaN2X9jsvpt/embed/',
    shortcode: 'DaN2X9jsvpt',
    tools: ['Canva Pro', 'Specializations Grid', 'Digital Poster'],
  },
  {
    id: 'd-4',
    title: 'Integrated B.Sc Biotechnology & Forensic Science Flyer',
    brand: 'Malwa Institute of Science & Tech (@mist_indore)',
    category: 'Course Launch',
    instagramUrl: 'https://www.instagram.com/mist_indore/p/DZ4E-mTSbIE/',
    embedUrl: 'https://www.instagram.com/p/DZ4E-mTSbIE/embed/',
    shortcode: 'DZ4E-mTSbIE',
    tools: ['Canva Pro', 'Scientific Branding', 'Curriculum PR'],
  },
  {
    id: 'd-5',
    title: 'National Technical Symposium Announcement Flyer',
    brand: 'Malwa Institute of Science & Tech (@mist_indore)',
    category: 'Event Poster',
    instagramUrl: 'https://www.instagram.com/mist_indore/p/DcivKBns0c8/',
    embedUrl: 'https://www.instagram.com/p/DcivKBns0c8/embed/',
    shortcode: 'DcivKBns0c8',
    tools: ['Canva Pro', 'Keynote Announcement', 'Editorial Layout'],
  },
  {
    id: 'd-6',
    title: 'Malwa Group of Institutions Annual Admissions Campaign',
    brand: 'Malwa Institute of Science & Tech (@mist_indore)',
    category: 'Institutional Prospectus',
    instagramUrl: 'https://www.instagram.com/mist_indore/p/DWlCWKVkina/',
    embedUrl: 'https://www.instagram.com/p/DWlCWKVkina/embed/',
    shortcode: 'DWlCWKVkina',
    tools: ['Canva Pro', 'Campus Prospectus', 'Enrollment Drive'],
  },
];

export const PROCESS_STAGES = [
  { step: '01', word: 'IDEA', label: 'Audience Insight', symbol: 'Lightbulb' },
  { step: '02', word: 'CREATE', label: 'Canva Design', symbol: 'Camera' },
  { step: '03', word: 'EDIT', label: 'CapCut Video', symbol: 'Video' },
  { step: '04', word: 'PUBLISH', label: 'Timed Launch', symbol: 'Smartphone' },
  { step: '05', word: 'GROW', label: 'Community & Leads', symbol: 'TrendingUp' },
];

export const EXPERIENCE_ITEMS = [
  {
    period: '2025 — PRESENT',
    company: 'Malwa Institute of Science & Technology',
    role: 'Marketing Executive & Content Creator',
    tags: ['SOCIAL MEDIA', 'CONTENT CREATION', 'REELS', 'ADMISSIONS'],
  },
  {
    period: '2024 — PRESENT',
    company: 'Marketing Master',
    role: 'Founder & Digital Strategist',
    tags: ['LOCAL SEO', 'BRANDING', 'WEBSITE', 'GOOGLE ADS'],
  },
];
