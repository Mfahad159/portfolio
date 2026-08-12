const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

export const assetPath = (path) => `${basePath}${path.startsWith('/') ? path : `/${path}`}`;

export const siteLinks = {
  github: 'https://github.com/Mfahad159',
  linkedin: 'https://www.linkedin.com/in/muhammad-fahad-136436291',
  email: 'mianfahad664@gmail.com',
  resume: assetPath('/Fahad_Resume.pdf'),
  resumeFileName: 'Fahad_Resume.pdf',
};

export const navLinks = [
  { label: 'Home', href: '#top', id: 'top' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Community', href: '#community', id: 'community' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];


export const featuredProjects = [
  {
    title: 'CertifyFlow',
    category: 'Product / SaaS',
    description:
      'Bulk certificate generation and management at scale.',
    problem: 'Creating certificates manually becomes slow and inconsistent when working at scale.',
    solution: 'A web platform to generate and manage certificates in bulk.',
    contribution: 'Built the platform with Next.js, Supabase, and TypeScript.',
    role: 'Full-stack development',
    tech: ['Next.js', 'Supabase', 'TypeScript'],
    image: assetPath('/projects/certifyflow.png'),
    imageAlt: 'CertifyFlow certificate generation dashboard',
    github: 'https://github.com/Mfahad159/certifyflow-next',
    demo: 'https://certifyflow-next.vercel.app/',
  },
  {
    title: 'PeakPath AI',
    category: 'AI / Product',
    description:
      'AI-powered scholarship discovery with profile-based matching.',
    problem: 'Scholarship information is often spread across different sources and hard to compare.',
    solution: 'A web app for searching scholarships and getting AI-assisted recommendations.',
    contribution: 'Built the product, AI search workflows, and web interface.',
    role: 'Full-stack & AI workflows',
    tech: ['React', 'Python', 'LLM APIs', 'Web'],
    image: assetPath('/projects/peakpath.png'),
    imageAlt: 'PeakPath AI scholarship discovery interface',
    github: 'https://github.com/Mfahad159/PeakPathai',
    demo: 'https://peak-pathai.vercel.app/',
  },
  {
    title: 'Thinklytics',
    category: 'Data / AI',
    description:
      'Interactive real-estate data exploration with Python and Streamlit.',
    problem: 'Property data is easier to understand when it can be explored visually.',
    solution: 'A Streamlit app for viewing and analyzing real-estate market data.',
    contribution: 'Built the data views and visualizations with Python and Streamlit.',
    role: 'Data analysis & visualization',
    tech: ['Python', 'Streamlit', 'Data Analysis'],
    image: assetPath('/projects/thinklytics.png'),
    imageAlt: 'Thinklytics real estate analytics interface',
    imageFit: 'contain',
    imageAspect: 'aspect-[4/3] sm:aspect-[16/11]',
    github: siteLinks.github,
    demo: 'https://thinklytics.streamlit.app/',
  },
];

export const moreProjects = [
  {
    title: 'AI Content Idea Generator',
    category: 'AI / Hackathon',
    description:
      'Full-stack app that generates structured content ideas using LLM APIs.',
    tech: ['React', 'Tailwind', 'FastAPI', 'Supabase', 'Mistral', 'OpenRouter'],
    github: siteLinks.github,
    demo: null,
  },
  {
    title: 'GenStart',
    category: 'AI / Product',
    description:
      'AI tool that uses Claude and GPT models to validate startup ideas and outline business plans.',
    tech: ['React', 'FastAPI', 'Claude 3.5', 'GPT-3.5', 'TailwindCSS'],
    github: 'https://github.com/Mfahad159/Geni-Starter',
    demo: null,
  },
  {
    title: 'Interview Prep AI',
    category: 'AI / Product',
    description:
      'AI-powered interview preparation app with practice questions and guided feedback.',
    tech: ['TypeScript', 'React', 'LLM APIs'],
    github: 'https://github.com/Mfahad159/interview-prep-ai',
    demo: null,
  },
  {
    title: 'Urdu OCR',
    category: 'AI / Research',
    description:
      'OCR pipeline for Urdu text extraction, preprocessing, and document processing.',
    tech: ['Python', 'OCR', 'Computer Vision'],
    github: 'https://github.com/Mfahad159/urdu-OCR',
    demo: null,
  },
  {
    title: 'Bit Bazar',
    category: 'Full-Stack',
    description:
      'Full-stack game store with authentication, cart functionality, and admin controls.',
    tech: ['FastAPI', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Mfahad159/Bit-Bazaar',
    demo: null,
  },
  {
    title: 'NeuroSync',
    category: 'AI / Web',
    description:
      'Web app exploring AI-assisted productivity and workflow synchronization.',
    tech: ['JavaScript', 'React', 'AI'],
    github: 'https://github.com/Mfahad159/NeuroSync',
    demo: null,
  },
  {
    title: 'Dynamic Path Finder Agent',
    category: 'AI / Algorithms',
    description:
      'Intelligent pathfinding agent built to navigate and adapt in dynamic environments.',
    tech: ['Python', 'AI Agents', 'Algorithms'],
    github: 'https://github.com/Mfahad159/Dynamic-Path-Finder-Agent',
    demo: null,
  },
  {
    title: 'Trendy AI Articles Generator',
    category: 'AI / Full-Stack',
    description:
      'Full-stack app that generates articles using a Llama-based model through a web interface.',
    tech: ['FastAPI', 'React', 'Llama-3-6B'],
    github: siteLinks.github,
    demo: null,
  },
];

/** @deprecated Use featuredProjects + moreProjects */
export const projects = [...featuredProjects, ...moreProjects];

export const communityAssets = {
  gdgTechnical: assetPath('/community/gdg_technical.jpeg'),
  gdgCommunity: assetPath('/community/gdg_community.jpeg'),
  gdgLogo: assetPath('/community/gdg_logo.jpeg'),
  certificate: assetPath('/community/mentorship_certificate.jpeg'),
  fastLogo: assetPath('/community/fast_logo.png'),
};

export const experienceData = [
  {
    number: '01',
    title: 'Freelance AI & Full-Stack Developer',
    organization: 'Fiverr & freelance clients',
    date: 'Aug 2023 — Present',
    description:
      'Delivering production-ready solutions for clients through platforms like Fiverr — full-stack web development, AI and GenAI integration, APIs, and backend systems with modern web technologies.',
    tags: [
      'Full-Stack',
      'AI / GenAI',
      'APIs',
      'React',
      'FastAPI',
      'Client Communication',
      'Requirements Analysis',
      'End-to-End Delivery',
      'Product Development',
    ],
    category: 'Freelance',
    icon: 'development',
  },
  {
    number: '02',
    title: 'Software & AI Development',
    organization: 'Personal & team projects',
    date: 'Aug 2023 — Present',
    description:
      'Building web apps, APIs, databases, and AI features across personal and team projects.',
    tags: ['React', 'Next.js', 'Python', 'FastAPI', 'AI'],
    category: 'Development',
    icon: 'development',
  },
  {
    number: '03',
    title: 'Product Field Testing Intern',
    organization: 'insite.life · Remote',
    date: 'Jun 2025 — Aug 2025',
    description:
      'Field testing product features and user flows for alpha and beta releases — generating unified reports, validating usability, and collaborating with product and community teams to refine use cases.',
    tags: [
      'Platform Evaluation',
      'Alpha / Beta Testing',
      'User Flow Testing',
      'Report Analysis',
      'SDLC',
      'Software Design & Analysis',
      'Team Collaboration',
      'Product Testing',
    ],
    category: 'Internship',
    icon: 'development',
  },
  {
    number: '04',
    title: 'Research Assistant',
    organization: 'VLMs, OCR & AI',
    date: 'Nov 2025 — Present',
    description:
      'Exploring VLMs, OCR systems, and LLM workflows through hands-on research and dataset work.',
    tags: [
      'NumPy',
      'Jupyter Notebook',
      'Qwen-VL / Qwen2.5-VL',
      'DeepSeek',
      'OCR Pipelines',
      'Prompt Engineering',
      'Model Inference',
      'Dataset Preparation',
      'Image Preprocessing',
    ],
    category: 'Research',
    icon: 'research',
  },
];

export const skills = [
  'React',
  'Next.js',
  'Python',
  'C++',
  'C#',
  'JavaScript',
  'HTML/CSS',
  'Assembly',
  'FastAPI',
  'Node.js',
  'TypeScript',
  'Tailwind CSS',
  'Streamlit',
  '.NET Windows Forms',
  'PostgreSQL',
  'Supabase',
  'MongoDB',
  'Firebase',
  'Vercel',
  'OpenAI APIs',
  'Hugging Face',
  'Prompt Engineering',
  'VLMs',
  'LLM APIs',
  'Qwen',
  'DeepSeek',
  'LangChain',
  'OpenRouter',
  'Git',
  'GitHub',
  'VS Code',
];

/** @deprecated Use skills */
export const skillGroups = [];


export const currentlyItems = [
  { emoji: '', text: 'Studying BSCS at FAST-NUCES' },
  { emoji: '', text: 'Building full-stack and AI projects' },
  { emoji: '', text: 'Exploring AI and LLM engineering' },
  { emoji: '', text: 'Looking for opportunities to grow through real-world engineering work' },
];
