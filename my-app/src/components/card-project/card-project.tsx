import { ProjectType } from "@/types/type-response";
import { Card, CardContent, CardTitle } from "../ui/card";
import Image from "next/image";
import { Text } from "../text";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export function CardProject(project: ProjectType) {
  const { name, description, linkPage, linkRepo, srcImg } = project;
  return (
    <Card className="group w-full lg:max-w-96  pt-4 rounded-xl">
      <CardContent>
        <Dialog>
          <DialogTrigger className="p-0 w-full overflow-hidden rounded-xl mb-6">
            <Image
              alt={name}
              src={srcImg}
              width={1000}
              height={1000}
              className="w-full h-52 brightness-75 group-hover:brightness-100 group-hover:scale-105  transition-all duration-300  cursor-pointer rounded-xl object-cover"
            />
          </DialogTrigger>
          <DialogContent className="p-0 m-0  rounded-xl bg-black border-none">
            <div className="relative rounded-xl">
              <Image
                alt={name}
                src={srcImg}
                width={2000}
                height={2000}
                className=" rounded-xl"
              />
            </div>
          </DialogContent>
        </Dialog>
        <CardTitle className="mb-1.5">{name}</CardTitle>
        <Text isDifferent={true}>{description}</Text>
        <div className="flex gap-2 mt-2">
          <Button asChild>
            <a href={linkPage} target="_blank">
              Visitar
            </a>
          </Button>
          <Button asChild variant={"outline"} className="rounded-[.5rem]">
            <a href={linkRepo} target="_blank">
              {" "}
              <Github size={20} /> <span className="ml-2">Código fonte</span>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
