import { ProjectType, StackResponseType } from "@/types/type-response";

export async function fetchStacks(): Promise<StackResponseType> {
  const data = await fetch(
    "https://portifolio-alpha-ebon.vercel.app/api/stacks"
  );
  const res = await data.json();

  return res[0] as StackResponseType;
}

export async function fetchProjects(): Promise<ProjectType[]> {
  const data = await fetch(
    "https://portifolio-alpha-ebon.vercel.app/api/projects"
  );
  const Projects: ProjectType[] = await data.json();
  return Projects;
}
