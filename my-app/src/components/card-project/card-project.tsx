import { ProjectType } from "@/types/type-response";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Text } from "../text";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import { Dialog } from "../ui/dialog";
import { DetailsImage } from "./details-image";
import { TriggerImage } from "./trigger-image";

export async function CardProject(project: ProjectType) {
  const { name, description, linkPage, linkRepo, srcImg } = project;

  return (
    <Card className="group w-full lg:max-w-96  pt-4 rounded-xl">
      <CardContent>
        <Dialog>
          <TriggerImage name={name} srcImg={srcImg} />
          <DetailsImage name={name} srcImg={srcImg} />
        </Dialog>
        <CardTitle className="mb-1.5">{name}</CardTitle>
        <Text isDifferent={true}>{description}</Text>
        <div className="flex h-auto items-center gap-2 mt-2">
          <Button asChild className="rounded-[.5rem]">
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
