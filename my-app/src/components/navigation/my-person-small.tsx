import Image from "next/image";

export function MyPersonSmall() {
  return (
    <div className="flex gap-2">
      <Image
        alt="foto de henry"
        src="/imgs/icon.jpeg"
        width={36}
        height={36}
        className="rounded object-cover"
      />
      <div>
        <p className="text-sm text-foreground font-medium">Henry Franz</p>
        <p className="text-xs text-muted-foreground  font-light">
          Front-end Developer
        </p>
      </div>
    </div>
  );
}
