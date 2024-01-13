import { ProjectType, StackResponseType } from "@/types/type-response";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function fetchStacks(): Promise<StackResponseType> {
  try {
    const data = await prisma.stacks.findMany();
    const stacks = { ...data[0] };
    return stacks;
  } catch (error) {
    console.log(error);
    return {} as StackResponseType;
  }
}

export async function fetchProjects(): Promise<ProjectType[]> {
  try {
    const projects = await prisma.projects.findMany();
    return projects;
  } catch (error) {
    console.log(error);
    return [];
  }
}
