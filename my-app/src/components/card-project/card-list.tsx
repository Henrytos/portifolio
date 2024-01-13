import { fetchProjects } from "@/services/fetchs";
import { CardProject } from "./card-project";
import { Suspense } from "react";
import { CardSkeleton } from "./card-skeleton";

export async function CardProjectList() {
  const Projects = await fetchProjects();
  return (
    <>
      {Projects.map((project) => (
        <Suspense fallback={<CardSkeleton />} key={project.id}>
          <CardProject {...project} key={project.name} />
        </Suspense>
      ))}
    </>
  );
}
