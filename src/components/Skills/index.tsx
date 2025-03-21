import skillsList from '@/config/skills';
import { cva } from 'class-variance-authority';
import Image from 'next/image';

const headerTitle = cva('sectionHeader sectionHeaderGradient');

const skillSetTitle = cva('text-3xl text-yellow-500 mb-2');

const skillGrid = cva('flex gap-2 flex-wrap mb-4');

const skillBoxItem = cva(
  'w-36 h-15 px-1 py-1 rounded-lg flex  justify-evenly bg-gray-900 items-center text-gray-100'
);

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="flex flex-col gap-2 mx-10 lg:max-w-6xl xl:mx-auto items-center justify-center"
    >
      <h2 className={headerTitle()}>Expertise</h2>
      <div className=" flex flex-col gap-4 w-9/10 items-center justify-center">
        {skillsList.map((skillSet) => {
          return (
            <div key={skillSet.sectionTitle}>
              <h3 className={skillSetTitle()}>{skillSet.sectionTitle}</h3>
              <div className={skillGrid()}>
                {skillSet.skills.map((skill) => {
                  return (
                    <div className={skillBoxItem()} key={skill.name}>
                      <Image
                        alt={skill.name}
                        src={skill.icon}
                        width={36}
                        height={36}
                        unoptimized
                      />
                      <span> {skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
