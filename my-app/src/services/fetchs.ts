import { StackResponseType } from "@/types/type-response";
import { PrismaClient, projects } from "@prisma/client";

const prisma = new PrismaClient();

export async function fetchStacks(): Promise<StackResponseType> {
  const data = await prisma.stacks.findMany();
  const stacks = { ...data[0] };
  return stacks;
}

export async function fetchProjects(): Promise<projects[]> {
  const projects = await prisma.projects.findMany();
  return projects;
}
