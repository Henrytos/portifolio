import { ProjectType } from "@/types/type-response";

export async function fetchProjects(): Promise<ProjectType[]> {
  const data = await fetch(`${process.env.API_URL}/projects`);

  if (!data) {
    console.error("Failed to fetch projects. Status:");
    return [];
  }

  try {
    const projects: ProjectType[] = await data.json();
    return projects;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return [];
  }
}
