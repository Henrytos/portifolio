import { Github } from "lucide-react";
import { Text } from "../text";
import { Button } from "../ui/button";
import { CardContent, CardTitle } from "../ui/card";
import { Dialog } from "../ui/dialog";
import { DetailsImage } from "./details-image";
import { TriggerImage } from "./trigger-image";
import { ProjectType } from "@/types/type-response";

interface ShowProjectProps extends ProjectType {
  isDifferent?: boolean;
}

export function ShowProject(props: ShowProjectProps) {
  const { name, description, linkPage, linkRepo, srcImg, isDifferent } = props;
  return isDifferent ? (
    <CardContent className="flex flex-col  lg:flex-row lg:justify-between">
      <Dialog>
        <TriggerImage
          name={name}
          srcImg={srcImg}
          className="h-56 w-96   lg:m-0  max-w-sm"
        />
        <DetailsImage name={name} srcImg={srcImg} />
      </Dialog>
      <article className="flex flex-col justify-center gap-1 text-left lg:text-right">
        <CardTitle className="mb-1.5 text-lg lg:text-xl">{name}</CardTitle>
        <Text isDifferent={true}>{description}</Text>
        <div className="flex h-auto items-center lg:justify-end gap-2 mt-2">
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
      </article>
    </CardContent>
  ) : (
    <CardContent className="flex flex-col-reverse lg:justify-between lg:flex-row">
      <article className="flex flex-col justify-center  gap-1 w-full">
        <CardTitle className="mb-1.5 text-lg lg:text-xl">{name}</CardTitle>
        <Text isDifferent={true}>{description}</Text>
        <div className="flex h-auto items-center  gap-2 mt-2">
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
      </article>
      <Dialog>
        <TriggerImage
          name={name}
          srcImg={srcImg}
          className="h-56 w-full max-w-sm"
        />
        <DetailsImage name={name} srcImg={srcImg} />
      </Dialog>
    </CardContent>
  );
}
