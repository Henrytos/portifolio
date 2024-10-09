import React from "react";
import { CardProject } from "./card-project";
import { Suspense } from "react";
import { CardSkeleton } from "./card-skeleton";
import { projects } from "@/_database/projects"

export function CardProjectList() {


  return (
    <>
      {projects.map((project) => (
        <Suspense fallback={<CardSkeleton />} key={project.id}>
          <CardProject {...project} key={project.name} />
        </Suspense>
      ))}
    </>
  );
}
