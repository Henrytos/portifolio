import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Poster {
  id: number;
  name: string;
  img: string;
}

function CarouselPosters({ posters }: { posters: Poster[] }) {
  return (
    <Carousel className="lg:w-full m-auto">
      <CarouselContent>
        {posters.map((item) => (
          <CarouselItem
            className="basis-1/2 md:basis-2/5 lg:basis-1/3"
            key={item.id}
          >
            <Image
              src={`/imgs/about-me/${item.img}`}
              alt={`capa de mangá de ${item.name}`}
              width={500}
              height={500}
              className="w-full h-full  max-w-72 object-cover rounded-xl border-2 shadow "
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden xl:flex" />
      <CarouselNext className="hidden xl:flex" />
    </Carousel>
  );
}

export function AnimesFavoites() {
  const favoriteAnimes: Poster[] = [
    {
      id: 1,
      name: "Sousou no Frieren",
      img: "snf.jpeg",
    },
    {
      id: 2,
      name: "Blue lock",
      img: "blue-lock.jpg",
    },
    {
      id: 3,
      name: "Jujutsu Kaisen",
      img: "jujutsu.jpg",
    },
    {
      id: 4,
      name: "JOJO",
      img: "jojo.jpg",
    },
    {
      id: 5,
      name: "Baki",
      img: "baki.jpg",
    },
    {
      id: 6,
      name: "Recor of Ragnaarok",
      img: "RoR.jpg",
    },
  ];

  return <CarouselPosters posters={favoriteAnimes} />;
}

export function SeriesFavorites() {
  const serieFavorites: Poster[] = [
    {
      id: 1,
      name: "Supernatural",
      img: "supernatural.jpg",
    },
    {
      id: 2,
      name: "The Bing Bang Theory",
      img: "bbt.webp",
    },
    {
      id: 3,
      name: "yuyu hakusho",
      img: "yhks.webp",
    },
  ];

  return <CarouselPosters posters={serieFavorites} />;
}
