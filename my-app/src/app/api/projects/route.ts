import { ProjectType } from "@/types/type-response";
import database from "../../../../database.json";

export async function GET() {
  const { projects } = database;
  const response: ProjectType[] = projects;
  return Response.json(response);
}
