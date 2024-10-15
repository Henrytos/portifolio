import { FolderClosed } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/_components/ui/card";
import { ShowProject } from "@/_components/card-project/show-project";
import { CardLink } from "./card-link";
import { GetProjectsApiResponse } from "@/app/projects/page";

export async function CardProjects() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
  const { projects } = await data.json() as GetProjectsApiResponse
  const myFavoritesProject = projects.filter((project) => project.isFavorite)

  return (
    <Card className="w-full rounded-[.5rem]">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="flex gap-2">
          <FolderClosed /> <span>Projetos</span>
        </CardTitle>
        <CardLink href="/projects">Saber mais</CardLink>
      </CardHeader>
      <div className="space-y-10">
        {myFavoritesProject.map((project, i) => (
          <ShowProject
            {...project}
            key={project.linkRepo}
            isDifferent={+i % 2 != 0}
          />
        ))}
      </div>
    </Card>
  );
}
