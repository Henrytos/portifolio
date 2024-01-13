import { ChevronRight, FolderClosed } from "lucide-react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { fetchProjects } from "@/services/fetchs";
import { ShowProject } from "../card-project/show-project";

export async function CardProjectHome() {
  const projects = await fetchProjects();
  const myFavoritesProject = projects.slice(0, 3);

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
