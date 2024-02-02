import { FolderClosed } from "lucide-react";
import { fetchProjects } from "@/_services/fetchs";
import { ProjectType } from "@/_types/type-response";
import { Card, CardHeader, CardTitle } from "@/_components/ui/card";
import { ShowProject } from "@/_components/card-project/show-project";
import { CardLink } from "./card-link";

export async function CardProjects() {
  const projects = await fetchProjects();
  const myFavoritesProject: ProjectType[] = [];
  projects.filter((project) => {
    if (
      project.name === "Academia Xhealth" ||
      project.name == "One bit X" ||
      project.name === "Next Anime"
    ) {
      myFavoritesProject.push(project);
      return project;
    }
  });

  return (
    <Card className="w-full rounded-[.5rem]">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="flex gap-2">
          <FolderClosed /> <span>Projetos</span>
        </CardTitle>
        <CardLink href="/projects">Saber mais</CardLink>
      </CardHeader>
      {myFavoritesProject.map((project, i) => (
        <ShowProject
          {...project}
          key={project.linkRepo}
          isDifferent={+i % 2 != 0}
        />
      ))}
    </Card>
  );
}
