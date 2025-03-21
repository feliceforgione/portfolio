import Image from 'next/image';
import Link from 'next/link';
import Tags from './Tags';
import { PortfolioProject } from '../Portfolio';
import Features from './Features';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface Props {
  portfolio: PortfolioProject;
  flip: boolean;
}

const DetailsContainer = cva(
  'flex flex-col mt-5 md:mt-0 w-full md:w-5/9 md:h-130 md:pr-1  overflow-y-auto scrollbar-thin'
);
const ImageContainer = cva(
  'w-full md:w-4/9 p-4 bgBlue rounded-xl overflow-hidden'
);

const PortfolioCard = ({ portfolio, flip }: Props) => {
  const { title, description, img, liveSiteUrl, technologies, features } =
    portfolio ? portfolio : {};

  return (
    <div className="mx-10 md:mx-15 lg:max-w-6xl xl:mx-auto mb-8 md:sticky md:top-[140px]  md:last:pb-8 scrollbar-thin scrollbar-thumb-sky-800 scrollbar-track-slate-800  bg-slate-900 border border-blue-900 rounded-xl">
      <div className="md:h-140 flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-1 p-6  ">
        <div className={DetailsContainer()}>
          <h3 className="text-3xl flex items-center font-semibold mb-2 text-yellow-500">
            {title}{' '}
            {liveSiteUrl && (
              <Link
                href={liveSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-600"
              >
                <ExternalLink />
              </Link>
            )}
          </h3>
          <p className="text-yellow-50">{description}</p>
          {features && (
            <div className="my-5">
              <Features features={features} />
            </div>
          )}

          {technologies && (
            <div className="my-4 justify-self-end mt-auto">
              <Tags tags={technologies} />
            </div>
          )}
        </div>
        <div className={cn(ImageContainer(), flip && 'md:order-first md:mr-2')}>
          <Image
            width={2000}
            height={1000}
            src={img!}
            alt={`${title} screenshot`}
            className="w-full md:h-120 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
