import { ChevronRight, FolderClosed } from "lucide-react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { fetchProjects } from "@/_services/fetchs";
import { ShowProject } from "../card-project/show-project";
import { ProjectType } from "@/_types/type-response";

export async function CardProjectHome() {
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
        <Link
          href="/projects"
          className="flex items-center text-xs text-primary hover:text-primary/75 hover:underline transition"
        >
          <p>Saber mais</p>
          <ChevronRight size={15} className="translate-y-px" />
        </Link>
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
