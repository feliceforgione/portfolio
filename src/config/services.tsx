import { cva } from 'class-variance-authority';
const cardBulletList = cva('text-amber-100 text-left list-disc list-inside');

export const servicesList = [
  {
    title: 'Web Development',
    icon: '/icons/web-domain.png',
    cardAngle: 20,
    bodyHTML: (
      <ul className={cardBulletList()}>
        <li>Full-Stack Development</li>
        <li>Responsive Web Design</li>
        <li>API Integration</li>
        <li>Website Optimization</li>
        <li>E-commerce Solutions </li>
        <li>SEO Marketing</li>
      </ul>
    ),
  },
  {
    title: 'AI Integration',
    icon: '/icons/bot.png',
    cardAngle: 0,
    bodyHTML: (
      <ul className={cardBulletList()}>
        <li>AI Agent Development</li>
        <li>Workflow Automation</li>
        <li>AI Model Integration</li>
        <li>AI-Powered Chatbots</li>
        <li>Process Optimization</li>
      </ul>
    ),
  },
  {
    title: 'Data Management',
    icon: '/icons/data-management.png',
    cardAngle: -20,
    bodyHTML: (
      <ul className={cardBulletList()}>
        <li>Data Analysis</li>
        <li>Data Visualization</li>
        <li>Data Integration</li>
        <li>Data Cleaning</li>
        <li>Database Management</li>
        <li>DB Model Development</li>
      </ul>
    ),
  },
];
