import Contact from '@/components/Contact';
import { Hero } from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import { Services } from '@/components/Services';
import { SkillsSection } from '@/components/Skills';

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsSection />
      <Portfolio />
      <Services />
      <Contact />
    </>
  );
}
