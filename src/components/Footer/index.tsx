import Image from 'next/image';
import { Logo } from '../Logo';

export default function Footer() {
  return (
    <footer className="mt-20 ">
      <Image
        src="footer-curve.svg"
        width={1000}
        height={100}
        alt=""
        unoptimized
        className="w-full rotate-180 "
      />
      {/*   <FooterSVG className="w-full h-auto rotate-180 fill-[#5555a9]" /> */}

      <div className="p-5 bg-[#020203] pl-22">
        <Logo className="fill-gray-700 ml-[-10px]" />
        <div className="text-gray-700 font-bold md:text-lg">
          <p>&copy; {new Date().getFullYear()}, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
