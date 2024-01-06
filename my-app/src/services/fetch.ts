import {
  ProjectType,
  StackResponseType,
  StackType,
} from "@/types/type-response";

export async function fetchProjects(): Promise<ProjectType[]> {
  try {
    const data = await fetch(`${process.env.API_URL}/projects`);
    const projects: ProjectType[] = await data.json();
    return projects;
  } catch (error) {
    return [];
  }
}

export async function fetchStacks(): Promise<StackResponseType> {
  try {
    const data = await fetch(`${process.env.API_URL}/stacks`);
    const stacks: StackResponseType = await data.json();
    return stacks;
  } catch (error) {
    return { frontEnd: [], backEnd: [], tools: [] };
  }
}
