import Image from "next/image";
import { cn } from "@/lib/utils";

interface HomeCardProps {
  bgColor: string;
  title: string;
  description: string;
  icon: string;
  alt: string;
  handleClick: () => void;
}

const HomeCard = ({
  bgColor,
  title,
  description,
  icon,
  alt,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        `${bgColor} px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer hover:transform hover:scale-102 duration-300`
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={icon} alt={alt} width={27} height={27} />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
