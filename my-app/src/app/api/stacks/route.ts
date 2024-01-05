import { StackType } from "@/types/type-response";
import database from "../../../../database.json";

interface ResponseStacksType {
  frontEnd: StackType[];
  backEnd: StackType[];
  tools: StackType[];
}

export async function GET() {
  const { stacks } = database;
  const response: ResponseStacksType = stacks;
  return Response.json(response);
}
