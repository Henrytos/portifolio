import React from "react";
import { CardProject } from "./card-project";
import { Suspense } from "react";
import { CardSkeleton } from "./card-skeleton";

export async function CardProjectList() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
  const projects = await data.json();
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
