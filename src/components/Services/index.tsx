import Image from 'next/image';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import ServiceCard from '../TiltCard';
import { card3 } from '../TiltCard/style.css';
import { servicesList } from '@/config/services';

const headerTitle = cva('sectionHeader sectionHeaderGradient');

const cardStyle = cva(
  'w-9/10 h-9/10 md:w-[300px] md:h-[400px] flex flex-col justify-start items-center rounded-xl border border-black px-2 py-10 '
);

export function Services() {
  return (
    <section
      id="services"
      className="mx-14 xl:max-w-6xl xl:mx-auto scroll-m-40 mt-60"
    >
      <h2 className={headerTitle()}>Services</h2>
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-20 my-15">
        {servicesList.map((service) => (
          <Card
            key={service.title}
            imageURL={service.icon}
            title={service.title}
            tiltAngleYInitial={service.cardAngle}
          >
            {service.bodyHTML}
          </Card>
        ))}
      </div>
    </section>
  );
}

function Card({
  imageURL,
  title,
  children,
  tiltAngleYInitial,
}: {
  imageURL: string;
  title: string;
  children: React.ReactNode;
  tiltAngleYInitial?: number;
}) {
  return (
    <ServiceCard
      cardStyle={cn(cardStyle(), card3)}
      tiltAngleYInitial={tiltAngleYInitial}
    >
      <div className="flex flex-col gap-5 items-center">
        <Image src={imageURL} width={75} height={75} alt={`${title} icon`} />
        <h3 className="text-2xl font-bold text-yellow-500">{title}</h3>
        {children}
      </div>
    </ServiceCard>
  );
}
