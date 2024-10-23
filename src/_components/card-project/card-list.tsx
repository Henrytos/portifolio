import React from "react";
import { CardProject } from "./card-project";
import { Suspense } from "react";
import { CardSkeleton } from "./card-skeleton";
import { GetProjectsApiResponse } from "@/app/projects/page";

export async function CardProjectList() {
  // const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
  // const { projects } = await data.json() as GetProjectsApiResponse;
  const projects: any[] = []
  return (
    <>
      {projects.map((project, i) => (
        <CardProject {...project} key={i} />
      ))}
    </>
  );
}
