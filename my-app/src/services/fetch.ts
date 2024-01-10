import { ProjectType } from "@/types/type-response";

export async function fetchProjects(): Promise<ProjectType[]> {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
    const res: ProjectType[] = await data.json();
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
    return [];
  }
}
