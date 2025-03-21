import { SquareDot } from 'lucide-react';

const Features = ({ features }: { features: string[] }) => {
  return (
    <ul className="flex flex-col gap-2 ">
      {features?.map((feature) => (
        <li key={feature} className=" flex gap-1 items-center">
          <SquareDot className="text-gray-500 w-8" />
          <p className="text-gray-200 w-full">{feature}</p>
        </li>
      ))}
    </ul>
  );
};

export default Features;
