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
    github: siteLinks.github,
    demo: 'https://certifyflow-next.vercel.app/',
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
  {
    title: 'AI Content Idea Generator',
    category: 'AI / Hackathon',
    description:
      'Full-stack app that generates content ideas using LLM APIs.',
    problem: 'Coming up with content ideas regularly takes time and structure.',
    solution: 'A full-stack app that sends prompts to LLM APIs and returns organized content ideas.',
    contribution: 'Built the React frontend, FastAPI backend, and LLM API integration.',
    role: 'Full-stack & AI integration',
    tech: ['React', 'Tailwind', 'FastAPI', 'Supabase', 'Mistral', 'OpenRouter'],
    image: assetPath('/projects/ai-content-generator.png'),
    imageAlt: 'AI Content Idea Generator web application interface',
    github: siteLinks.github,
    demo: null,
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
    github: siteLinks.github,
    demo: 'https://peak-pathai.vercel.app/',
  },
];

export const moreProjects = [
  {
    title: 'GenStart',
    category: 'AI / Product',
    description:
      'An AI tool that uses Claude and GPT models to help validate startup ideas and outline business plans.',
    tech: ['React', 'FastAPI', 'Claude 3.5', 'GPT-3.5', 'TailwindCSS'],
    github: siteLinks.github,
    demo: null,
  },
  {
    title: 'Bit Bazar',
    category: 'Full-Stack',
    description:
      'A full-stack game store app with user authentication, cart functionality, and admin controls.',
    tech: ['FastAPI', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS'],
    github: siteLinks.github,
    demo: null,
  },
  {
    title: 'AI Habit Tracker',
    category: 'Productivity',
    description: 'A habit tracking app with reminders and basic progress tracking.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: siteLinks.github,
    demo: null,
  },
  {
    title: 'Trendy AI Articles Generator',
    category: 'AI / Full-Stack',
    description: 'A full-stack app that generates articles using a Llama-based model through a web interface.',
    tech: ['FastAPI', 'React', 'Llama-3-6B'],
    github: siteLinks.github,
    demo: null,
  },
  {
    title: 'Student Management System',
    category: 'Systems',
    description: 'A command-line tool for managing student records and calculating CGPA.',
    tech: ['Bash'],
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
    title: 'Software & AI Development',
    organization: 'Personal & team projects',
    date: 'Aug 2024 — Present',
    description:
      'Building web apps, APIs, databases, and AI features across personal and team projects.',
    tags: ['React', 'Next.js', 'Python', 'FastAPI', 'AI'],
    category: 'Development',
    icon: 'development',
  },
  {
    number: '02',
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
  {
    number: '03',
    title: 'Freelance AI & Full-Stack Developer',
    organization: 'Fiverr & freelance clients',
    date: '2023 — Present',
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
