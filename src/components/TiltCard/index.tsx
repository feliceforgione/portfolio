'use client';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import Tilt from 'react-parallax-tilt';

type Props = {
  children: React.ReactNode;
  cardStyle: string;
  tiltAngleYInitial?: number;
};

const TiltCardStyle = cva('transform-3d');

const TiltCard = ({ children, cardStyle, tiltAngleYInitial }: Props) => {
  return (
    <>
      <Tilt
        scale={1.1}
        perspective={500}
        transitionSpeed={2500}
        tiltMaxAngleX={7}
        tiltMaxAngleY={7}
        tiltAngleYInitial={tiltAngleYInitial || 0}
        className={cn(TiltCardStyle(), cardStyle)}
      >
        <div className="translate-z-10">{children}</div>
      </Tilt>
    </>
  );
};

export default TiltCard;
