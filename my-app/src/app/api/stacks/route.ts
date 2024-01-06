import { StackResponseType, StackType } from "@/types/type-response";
import database from "../../../../database.json";

export async function GET() {
  const { stacks } = database;
  const response = stacks;
  return Response.json(response);
}
