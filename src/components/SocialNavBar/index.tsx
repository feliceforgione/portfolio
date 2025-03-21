interface Props {
  link: string;
  alt_text: string;
  image_file: string;
}

const socialMedia = [
  {
    link: 'https://www.linkedin.com/in/feliceforgione',
    alt_text: 'linkedin',
    icon: '/icons/linkedin.svg',
  },
  {
    link: 'https://www.github.com/feliceforgione',
    alt_text: 'github',
    icon: '/icons/github.svg',
  },
  {
    link: 'https://bsky.app/profile/feliceforgione.com',
    alt_text: 'github',
    icon: '/icons/bluesky.svg',
  },
  {
    link: 'https://twitter.com/forgione67',
    alt_text: 'twitter',
    icon: '/icons/twitter.svg',
  },
  {
    link: '/#contact',
    alt_text: 'email',
    icon: '/icons/email.svg',
  },
];

function SocialIcon({ alt_text, image_file, link }: Props) {
  return (
    <a href={link}>
      <img
        src={image_file}
        alt={alt_text}
        className=" w-6 md:w-8 mb-2 md:my-2 transition-all hover:opacity-40 transform hover:scale-75"
      />
    </a>
  );
}

export default function SocialNavBar() {
  return (
    <div className="fixed left-3 md:left-5 bottom-0 z-30 bg-transparent">
      <div className="flex flex-col  justify-center items-center ">
        {socialMedia.map((item) => {
          return (
            <SocialIcon
              link={item.link}
              image_file={item.icon}
              alt_text={item.alt_text}
              key={item.icon}
            />
          );
        })}
        <div className="h-20 md:h-32 mt-2 w-1/12 bg-yellow-400" />
      </div>
    </div>
  );
}
