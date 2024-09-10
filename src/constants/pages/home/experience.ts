import { Experience } from '@/types/experience'

export const ExperienceData: Experience[] = [
  {
    name: 'Popupsmart',
    icon: '/assets/icons/popupsmart.svg',
    path: 'https://popupsmart.com/',
    date: '21 February 2024 - 22 July 2024',
    position: 'Intern Software Developer',
    projects: [
      {
        name: 'Website Audit AI',
        path: 'https://websiteauditai.com/',
        description: 'AI-Powered Website Audit and CRO & UX Analysis',
        whatIDid: [
          'Developed the website from scratch',
          'Integrated OpenAI API to generate AI-Powered website audit reports',
          'Integrated Langchain API to translate the website to multiple languages',
          'Integrated Stripe for payment processing',
        ],
        stack: [
          'Next.js',
          'TypeScript',
          'Zustand',
          'Supabase',
          'OpenAI API',
          'Langchain',
          'Tailwind CSS',
          'shadcn/ui',
          'Stripe',
          'Vercel',
        ],
      },
    ],
  },
  {
    name: 'Popupsmart',
    icon: '/assets/icons/popupsmart.svg',
    path: 'https://popupsmart.com/',
    date: '22 July 2024 - Present',
    position: 'Software Developer',
    projects: [
      {
        name: 'HR Assistant AI',
        path: 'https://hrassistantai.com/',
        description:
          'HR Assistant AI is an AI-powered tool designed to automate and streamline various HR tasks using artificial intelligence. It helps manage in-house questions with automated answers and reduce repetitive tasks.',
        whatIDid: [
          'Developed the website from scratch',
          'Integrated OpenAI API to generate HR documents',
          'Integrated Langchain API to translate the website to multiple languages',
          'Integrated Stripe for payment processing',
        ],
      },
      {
        name: 'LiveChatAI',
        path: 'https://livechatai.com/',
        description:
          'LiveChatAI, your ultimate AI bot architect. Harnessing the capabilities of ChatGPT, it tailors your data into an interactive chat widget for your website.',
        whatIDid: [
          'Developed the website from scratch',
          'Integrated OpenAI API to generate chatbot responses',
          'Integrated Langchain API to translate the website to multiple languages',
          'Integrated Stripe for payment processing',
        ],
      },
    ],
  },
]