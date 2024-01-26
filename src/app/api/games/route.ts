import games from "@/lib/game/data.json";

export async function GET() {
	return Response.json({ data: games });
}
