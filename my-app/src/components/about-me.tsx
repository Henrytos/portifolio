import clsx from "clsx";
import Image from "next/image";
import { ReactNode } from "react";

export function List({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className="flex items-center gap-3">
      <span className="w-1 h-1 translate-y-px rounded block bg-muted-foreground" />
      <div className={clsx("flex items-center gap-2", className)}>
        {children}
      </div>
    </span>
  );
}

export function ListImage({
  children,
  pathImg,
}: {
  children: ReactNode;
  pathImg: string;
}) {
  return (
    <li className="space-y-2">
      <List>
        <span className="font-bold antialiased">{children}</span>
      </List>
      <Image
        src={`/imgs/about-me/${pathImg}`}
        width={400}
        height={400}
        className="w-full  object-cover"
        alt={`imagem do poster de ${children}`}
      />
    </li>
  );
}

export function ListOfImages({ children }: { children: ReactNode }) {
  return (
    <ul
      className=" space-y-1 grid  
          grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5"
    >
      {children}
    </ul>
  );
}

export function SerieList() {
  const serieList = [
    {
      name: "The big bang theory",
      pathImg: "bbt.webp",
    },
    {
      name: "Supernatural",
      pathImg: "supernatural.jpg",
    },
    {
      name: "Yu Yu Hakusho",
      pathImg: "yhks.webp",
    },
  ];
  return (
    <ListOfImages>
      {serieList.map((serie) => (
        <ListImage pathImg={serie.pathImg} key={serie.name}>
          {serie.name}
        </ListImage>
      ))}
    </ListOfImages>
  );
}

export function AnimeList() {
  const animeList = [
    { name: "SouSou no frieren", pathImg: "snf.jpeg" },
    {
      name: "jujutsu kaisen",
      pathImg: "jk.jpeg",
    },
    {
      name: "Blue Lock",
      pathImg: "bl.jpeg",
    },
  ];
  return (
    <ListOfImages>
      {animeList.map((anime) => (
        <ListImage pathImg={anime.pathImg} key={anime.name}>
          {anime.name}
        </ListImage>
      ))}
    </ListOfImages>
  );
}
