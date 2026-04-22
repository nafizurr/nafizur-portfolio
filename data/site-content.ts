export type QA = {
  question: string;
  answer: string;
};

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  statusLabel?: string;
};

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const profile = {
  name: 'Nafizur Rahman',
  roleLine: 'CS Student · Software Engineer · AI Systems Builder',
  heroTitle: 'Building software that is simple, reliable, and worth using.',
  heroDescription:
    'I build elegant digital experiences, AI-enabled workflows, and scalable applications with a focus on clarity, usefulness, and quiet craft.',
  aboutTitle: 'A computer science student building technology people can actually use.',
  aboutParagraphs: [
    "I'm a passionate computer science student focused on building innovative AI-enabled workflows and scalable applications that are clear, useful, and thoughtfully designed for real people.",
    'I care about software that does more than function. It should guide, support, and feel intuitive from the first interaction to the last.',
  ],
  contactTitle: "Let's build something thoughtful.",
  contactDescription:
    "If you're interested in internships, collaboration, or conversations about software and AI-enabled products, I'd love to connect.",
  email: 'nafizurr75@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nafizurr05',
  headshot: '/nafizur-headshot.png',
  resumeFile: '/nafizurr_resume.docx.pdf',
};

export const skills = [
  'TypeScript / JavaScript',
  'Python',
  'Java',
  'C',
  'SQL',
  'Next.js',
  'React',
  'Node.js',
  'Tailwind CSS',
  'PostgreSQL',
  'Docker',
  'AWS / GCP',
  'Claude API',
  'Gemini API',
];

export const highlights = [
  {
    label: 'Focus',
    value: 'AI workflows and usable systems',
  },
  {
    label: 'Style',
    value: 'Minimal, elegant, quietly expressive',
  },
  {
    label: 'Goal',
    value: 'Internships, projects, thoughtful collaboration',
  },
];

export const projects: Project[] = [
  {
    title: 'Resumind',
    subtitle: 'AI/LLM-integrated ATS pipeline shipped to production',
    description:
      'Shipped an AI-integrated ATS pipeline to production — automating resume parsing and role-specific feedback generation end-to-end. Built the full RESTful data flow between the React frontend and AI inference layer, managing async state, error boundaries, and response formatting across the stack.',
    stack: ['React Router', 'TypeScript', 'Puter', 'Tailwind CSS'],
    image: '/resumind-showcase.png',
    imageAlt: 'Resumind project screenshot showing application tracking and resume ratings',
    liveUrl: 'https://puter.com/app/Resu-Mind',
  },
  {
    title: 'Travel Planner',
    subtitle: 'Full-stack travel platform with dynamic itinerary and global data visualization',
    description:
      'Built and launched a full-stack travel platform enabling dynamic itinerary creation and global data visualization. Back-end optimizations reduced database load time by 30%. Normalized a relational schema to handle complex nested travel data, balancing query performance with integrity across linked entities.',
    stack: ['Next.js', 'Prisma', 'Neon', 'PostgreSQL', 'TypeScript'],
    image: '/travel-planner-showcase.png',
    imageAlt: 'Travel planner project screenshot showing a 3D globe and countries visited panel',
    statusLabel: 'Private Project',
  },
  {
    title: 'Portfolio & AI Chatbot',
    subtitle: 'Personal portfolio with an embedded interview-ready AI assistant',
    description:
      'A single-page portfolio built in Next.js to showcase projects, skills, and experience. Includes a custom AI chatbot — Night Desk Assistant — that answers recruiter questions with structured, interview-ready responses.',
    stack: ['Next.js', 'TypeScript', 'Claude API', 'Vercel'],
    image: '/chatbot-mascot.png',
    imageAlt: 'Portfolio site screenshot showing the Night Desk Assistant chatbot demo',
    liveUrl: 'https://nafizur-portfolio.vercel.app',
  },
];

export const interviewQas: QA[] = [
  {
    question: 'Tell me about Nafizur.',
    answer:
      'Nafizur Rahman is a computer science student who enjoys building software that feels both technically capable and easy for people to use. His work consistently leans toward AI-enabled workflows, product-minded interfaces, and practical full-stack systems.',
  },
  {
    question: 'What projects stand out most?',
    answer:
      'Resumind, Travel Planner, and this portfolio itself are strong examples. Resumind shows product thinking around AI feedback and structured workflows. Travel Planner highlights interactive front-end and spatial UI work. The portfolio demonstrates full-stack execution with an embedded AI chatbot built on the Claude API.',
  },
  {
    question: 'What kind of engineer is he becoming?',
    answer:
      'He is growing into a product-focused software engineer who cares about both implementation and experience. The pattern across his work is building things that are not just functional, but clear, polished, and useful.',
  },
  {
    question: 'How does he work with other people?',
    answer:
      'He comes across as collaborative and product-aware. He is interested in understanding the problem first, aligning on what matters most, and then building something that is both technically sound and easy for others to work with or use.',
  },
  {
    question: 'What are his strengths in an interview?',
    answer:
      'He presents well when talking about product thinking, front-end polish, usability, and how AI can improve a workflow without making it more confusing. A strong theme in his work is combining technical execution with user clarity.',
  },
  {
    question: 'How does he approach building products?',
    answer:
      'He tends to think from the user backward. That means shaping interfaces around clarity, lowering friction, and making sure the experience feels understandable instead of technically impressive but hard to use.',
  },
  {
    question: 'What should I ask in an interview?',
    answer:
      'Good questions would be: how do you decide when AI adds real value, how do you balance building fast with polishing the experience, and how do you turn a rough concept into something people can actually navigate and trust?',
  },
  {
    question: 'How does he handle challenges?',
    answer:
      'A good way to describe his approach is steady and iterative. He seems comfortable refining ideas, improving UX details, and working through ambiguity until the product feels more coherent and useful.',
  },
  {
    question: 'What technical choices define his work?',
    answer:
      'His projects point toward modern front-end and full-stack tooling, especially React and Next.js style development, with an emphasis on interfaces, structured workflows, and practical AI-assisted features rather than novelty alone.',
  },
  {
    question: 'Why is Resumind a strong project?',
    answer:
      'Resumind is strong because it combines a real user problem with AI-assisted feedback in a clear workflow. It shows that Nafizur is not just interested in AI as a feature, but in how AI can support decision-making in a practical product.',
  },
  {
    question: 'Why is Travel Planner a strong project?',
    answer:
      'Travel Planner highlights a different strength: visual communication. It shows comfort with interactive front-end experiences, spatial thinking, and presenting information in a way that feels engaging instead of static.',
  },
  {
    question: 'How can I reach him?',
    answer:
      'You can contact Nafizur directly at nafizurr75@gmail.com, connect on LinkedIn, or review and download his resume from the portfolio page.',
  },
];
