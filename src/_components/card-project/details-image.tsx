import Image from "next/image";
import { DialogContent } from "../ui/dialog";
import clsx from "clsx";

interface DetailsImageProps {
  srcImg: string;
  name: string;
  className?: string;
}

export function DetailsImage({ srcImg, name, className }: DetailsImageProps) {
  return (
    <DialogContent className="p-0 m-0  rounded-xl bg-black border-none">
      <div className="relative rounded-xl">
        <Image
          alt={name}
          src={srcImg}
          width={800}
          height={800}
          className={clsx("rounded-xl w-full", className)}
          priority={false}
        />
      </div>
    </DialogContent>
  );
}
