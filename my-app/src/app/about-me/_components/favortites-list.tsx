import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/_components/ui/carousel";
import { animesFavorite } from "@/_database/animes";
import { Poster, seriesFavorites } from "@/_database/series";
import Image from "next/image";



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


  return <CarouselPosters posters={animesFavorite} />;
}

export function SeriesFavorites() {


  return <CarouselPosters posters={seriesFavorites} />;
}
