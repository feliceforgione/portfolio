import { socialMediaLinks } from '@/config/links';
import Image from 'next/image';

interface Props {
  link: string;
  alt_text: string;
  image_file: string;
}

function SocialIcon({ alt_text, image_file, link }: Props) {
  return (
    <a href={link}>
      <Image
        src={image_file}
        alt={alt_text}
        width={24}
        height={24}
        className=" w-6 lg:w-8 mb-2 lg:my-2 transition-all hover:opacity-40 transform hover:scale-75"
      />
    </a>
  );
}

export default function SocialNavBar() {
  return (
    <div className="fixed left-3 lg:left-4 bottom-0 z-30 bg-transparent">
      <div className="flex flex-col  justify-center items-center ">
        {socialMediaLinks.map((item) => {
          return (
            <SocialIcon
              link={item.link}
              image_file={item.icon}
              alt_text={item.alt_text}
              key={item.icon}
            />
          );
        })}
        <div className="h-20 lg:h-32 mt-2 w-1/12 bg-yellow-400" />
      </div>
    </div>
  );
}
