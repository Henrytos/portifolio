import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("portifolio");

    const movies = await db
      .collection("stacks")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    return Response.json(movies);
  } catch (e) {
    console.error(e);
  }
}
