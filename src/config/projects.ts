import { PortfolioProject } from '@/components/Portfolio';

const projectsData: PortfolioProject[] = [
  {
    title: 'Forge Prompt',
    img: '/projects/forgeprompt.png',
    liveSiteUrl: 'https://forgeprompt.ai',
    description:
      'Provides articles and tutorials about the latest AI and prompt engineering.',
    category: '',
    features: [
      'In-Depth AI Strategies: Offers concise guides on prompt engineering and optimizing model performance across various platforms.',
      'Model Deployment Tutorials: Provides easy-to-follow instructions for installing AI models locally.',
      'Programming Guides: Features practical programming tutorials that focus on AI applications.',
      "Generative AI Insights: Explores generative AI's potential and trends",
      'Latest AI News: Delivers updates on AI developments, industry trends and innovations',
    ],
    technologies: [
      'Next.js',
      'PostgreSQL',
      'Prisma',
      'Tailwind CSS',
      'Radix UI',
      'Shadcn UI',
      'Sanity',
      'Stripe',
    ],
  },
  {
    title: 'TubeNotes',
    img: '/projects/tubenotes.png',
    liveSiteUrl:
      'https://chromewebstore.google.com/detail/tubenotes-%E2%80%93-youtube-summa/fofnploipdanjioaflcdnfobgfdhecmo?authuser=1&hl=en',
    description:
      'AI-powered Chrome extension designed to enhance your YouTube experience by summarizing videos, generating detailed outlines, and allowing you to bookmark important moments.',
    category: '',
    features: [
      'AI-Powered Summaries – Get a quick and accurate summary of any YouTube video using ChatGPT and Google Gemini, saving you time while ensuring you grasp the main points.',
      'Detailed Video Outline – Automatically generates a structured breakdown of the video, so you can scan key topics at a glance without watching the entire video.',
      'Bookmark Time Points – Easily save and revisit important moments in the video. Whether it’s an insightful comment, a key tutorial step, or an interesting discussion, your bookmarks help you jump back instantly.',
      'YouTube Chapters Support – If the video includes chapters, TubeNotes displays them neatly for quick navigation.',
    ],
    technologies: ['Next.js', 'TypeScript', 'OpenAI', 'MUI'],
  },
  {
    title: 'Foodiegram',
    img: '/projects/foodiegram.jpg',
    description:
      'Share what you are eating with others and find new delicious foods to try. Find interesting foods in your area.',
    category: '',
    features: [
      'Explore new food posts that are within your current location',
      'Follow people who share foods that you enjoy',
      'Save your favorite posts',
      'Leave comments on posts',
      'Notifications of when people follow you or like your posts',
      'Find food posts from specific food establishments',
      'Suggestions for people to follow based on your likes',
      'Infinite Scroll food feed',
    ],
    technologies: [
      'React 18',
      'React Router 6',
      'PostgreSQL',
      'Firebase 8',
      'Material UI',
      'Cloudinary',
      'Apollo',
      'GraphQL Hasura',
      'Google Maps',
      'PostGIS',
      'React Hook Form',
    ],
    liveSiteUrl: 'https://foodiegram.vercel.app/',
  },

  {
    title: 'iEats',
    img: '/projects/ieats.jpg',
    description:
      'Making online ordering easy without the service fees. A full-stack online ordering framework to quickly setup a food services company.',
    category: '',
    features: [
      'Authenticate users by using Google, Facebook, or GitHub',
      'Process payments using Stripe',
      'Easily add products and categories as administer',
      'Manage orders',
      'Handle deliveries and reserve tables',
    ],
    technologies: [
      'NextJs',
      'PostgreSQL',
      'NextAuth',
      'TanStack Query',
      'Prisma',
      'Stripe',
    ],
    liveSiteUrl: '',
  },
  {
    title: 'OTC Guide',
    img: '/projects/otcguide.jpg',
    description:
      'With the demands on pharmacists increasing and more stores selling over-the-counter products without a pharmacist on site, consumers are left on their own to choose from the growing number of over-the-counter selections. While OTC guide will never replace the importance of a pharmacist or other medical professionals, it is a valuable tool for the consumer who is in search of non-prescription treatment options and information.',
    category: '',
    features: [
      'Utilizes disease classes, a brief medical history, and various clinical based questions to lead the consumer in the right direction',
      'Provides guidance on over-the-counter products',
      'Informs consumers on non-pharmacologic option',
      'Detailed information for each over-the-counter product including: large 360 degree panoramic image of the product and enlarged easy-to-read replication of the product label',
    ],
    technologies: [
      'TypeScript',
      'NextJs',
      'Zustand',
      'Prisma',
      'Docker',
      'MySQL',
    ],
    liveSiteUrl: '',
  },
  {
    title: 'BioClair',
    img: '/projects/bioclair.jpg',
    description:
      'The goal of BioClair is to deliver effective natural Non-GMO products to the market, with each of their products designed to relieve and reduce suffering and to enhance the body’s own healing capabilities.',
    category: '',
    features: [],
    technologies: ['TypeScript', 'MySQL', 'Shopify', 'Liquid'],
    liveSiteUrl: 'https://bioclair.ca',
  },
  {
    title: 'Omega Nutrition',
    img: '/projects/omega.jpg',
    description:
      'Omega Nutrition makes simple and clean products that fit your healthy lifestyle. Always authentic, their good-for-you products make it easy to be your best self. A true original, they have spent 30+ years pushing boundaries and creating premium certified organic products that you can feel good about.',
    category: 'Branding',
    features: [],
    technologies: ['TypeScript', 'Tailwind CSS', 'MySQL', 'Shopify', 'Liquid'],
    liveSiteUrl: 'https://omeganutrition.com/',
  },
  {
    title: 'Forgia',
    img: '/projects/forgia.jpg',
    description:
      'Forgia Brick Oven Pizzeria is a brick oven pizzeria serving you delicious authentic Italian cuisine in a casual setting. Family owned and operated, with over 40 years experience crafting the perfect pizza using only the freshest ingredients.',
    category: '',
    features: [],
    technologies: ['TypeScript', 'NextJs', 'Stripe'],
    liveSiteUrl: 'https://www.forgiapizzeria.com/',
  },
  {
    title: 'HIV Pharmacotherapy Network',
    img: '/projects/hiv.jpg',
    description:
      'The HIV Pharmacotherapy Network promotes and encourages research activities that enhance collaboration and coordination of AIDS research. The network emphasizes the importance of interdisciplinary collaboration, especially between basic and clinical investigators.',
    category: '',
    features: [
      'Healthcare Provider Portal: Enables adding patients, viewing treatment plans, and collaborating with other professionals',
      'HIPAA-compliant storage for patient records',
      'Detailed medical profiles including symptoms, test results, and drug history',
      'Outcome tracking metrics for evaluating treatment effectiveness',
    ],
    technologies: ['TypeScript', 'CSS', 'Oracle', 'Auth0', 'AWS'],
    liveSiteUrl: '',
  },
];

export default projectsData;
