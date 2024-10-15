

import { Card, CardContent, CardTitle } from "../ui/card";
import { Text } from "../text";
import { Button } from "../ui/button";
import { Github, Link } from "lucide-react";
import { Dialog } from "../ui/dialog";
import { DetailsImage } from "./details-image";
import { TriggerImage } from "./trigger-image";
import { Project } from "@/app/projects/page";

export function CardProject(project: Project) {
  const { name, description, linkPage, linkRepo, srcImg } = project;

  return (
    <Card className="group w-full  pt-4 rounded-xl ">
      <CardContent className="w-full h-full flex flex-col justify-between gap-y-6">
        <div className="space-y-4">
          <Dialog>
            <TriggerImage name={name} srcImg={srcImg} className="h-60" />
            <DetailsImage name={name} srcImg={srcImg} />
          </Dialog>
          <CardTitle className="mb-1.5">{name}</CardTitle>
          <Text isDifferent={true}>{description}</Text>
        </div>
        <div className="flex  items-center gap-2  ">
          <Button asChild className="rounded-[.5rem]">
            <a href={linkPage} target="_blank">
              <Link size={20} />
              <span className="ml-2">Visitar</span>
            </a>
          </Button>
          <Button asChild variant={"outline"} className="rounded-[.5rem]">
            <a href={linkRepo} target="_blank">
              <Github size={20} /> <span className="ml-2">Código fonte</span>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
