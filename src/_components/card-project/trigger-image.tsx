import Image from "next/image";
import { DialogTrigger } from "../ui/dialog";
import clsx from "clsx";

interface TriggerImageProps {
  srcImg: string;
  name: string;
  className?: string;
  classNameContainer?: string;
}

export function TriggerImage({ srcImg, name, className, classNameContainer }: TriggerImageProps) {
  const basedStyleContainerImage = "p-0 w-full overflow-hidden rounded-xl m-0"
  const baseStyleImage =
    " h-52 w-full brightness-75 group-hover:brightness-100 group-hover:scale-105  transition-all duration-300  cursor-pointer rounded-xl object-cover";
  return (
    <DialogTrigger className={clsx(basedStyleContainerImage, classNameContainer)}>
      <Image
        alt={name}
        src={srcImg}
        width={300}
        height={300}
        className={clsx(baseStyleImage, className)}
        priority={false}
      />
    </DialogTrigger>
  );
}
