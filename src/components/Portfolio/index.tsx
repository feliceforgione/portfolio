import projects from '@/config/projects';
import PortfolioCard from '../PortfolioCard';
import { cva } from 'class-variance-authority';

export interface PortfolioProject {
  title: string;
  img: string;
  description: string;
  category?: string;
  features: string[];
  technologies: string[];
  liveSiteUrl?: string;
}

const headerTitle = cva('sectionHeader sectionHeaderGradient');

const Portfolio = () => {
  return (
    <section id="projects" className="scroll-m-30 mt-60">
      <h2 className={headerTitle()}>Recent Projects</h2>
      <div className="relative mt-10">
        {projects?.map((project, id) => (
          <PortfolioCard
            key={project.title}
            portfolio={project}
            flip={id % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
