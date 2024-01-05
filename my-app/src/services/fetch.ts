import { ProjectType } from "@/types/type-response";

export async function fetchProjects(): Promise<ProjectType[]> {
  const data = await fetch(`${process.env.API_URL}/projects`);
  const projects: ProjectType[] = await data.json();
  return projects;
}
