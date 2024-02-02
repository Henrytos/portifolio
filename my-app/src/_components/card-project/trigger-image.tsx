import Image from "next/image";
import { DialogTrigger } from "../ui/dialog";
import clsx from "clsx";

interface TriggerImageProps {
  srcImg: string;
  name: string;
  className?: string;
}

export function TriggerImage({ srcImg, name, className }: TriggerImageProps) {
  const baseStyleImage =
    "w-full h-52 brightness-75 group-hover:brightness-100 group-hover:scale-105  transition-all duration-300  cursor-pointer rounded-xl object-cover";
  return (
    <DialogTrigger className="p-0 w-full overflow-hidden rounded-xl mb-6">
      <Image
        alt={name}
        src={srcImg}
        width={1000}
        height={1000}
        className={clsx(baseStyleImage, className)}
      />
    </DialogTrigger>
  );
}
