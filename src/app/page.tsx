import GameCard from "@/components/GameCard";
import { getAllGames } from "@/lib/actions/games.actions";
import { Game } from "@/lib/game/game";

async function getData(): Promise<Game[]> {
    // Fetching data from a Next.js router handler instead of directy importing
    // the JSON here is a deliberate choice. It allows us to demonstrate how to
    // data is fetched in the server.
    const res = await fetch("http://localhost:3001/api/games");

    if (!res.ok) {
        throw new Error("Failed to fetch games");
    }

    return res.json().then((data) => data.data);
}

export default async function Home() {
    const games = await getData();

    return (
        <main className="flex min-h-screen flex-col p-6 gap-6">
            <h1 className="text-3xl font-bold">Video Games Release Tracker</h1>

            {/* Search */}
            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="Enter title or description"
                    className="flex-grow p-2 rounded bg-slate-900 text-slate-50"
                />
                <button className="p-2 rounded bg-green-500">Search</button>
            </div>

            {/* Tags filter */}
            <div className="flex gap-2 overflow-auto">
                <button className="p-2 rounded bg-slate-900 text-slate-50">Action</button>
                <button className="p-2 rounded bg-slate-900 text-slate-50">Adventure</button>
                <button className="p-2 rounded bg-slate-900 text-slate-50">RPG</button>
                <button className="p-2 rounded bg-slate-900 text-slate-50">Strategy</button>
                <button className="p-2 rounded bg-slate-900 text-slate-50">Simulation</button>
                <button className="p-2 rounded bg-slate-900 text-slate-50">Sports</button>
                <button className="p-2 rounded bg-slate-900 text-slate-50">Racing</button>
                <button className="p-2 rounded bg-slate-900 text-slate-50">Puzzle</button>
            </div>

            {/* Games */}
            <div className="grid grid-cols-auto gap-4">
                {games.map((game) => (
                    <GameCard
                        key={game.id}
                        id={game.id}
                        title={game.title}
                        price={game.price}
                        releaseDate={game.releaseDate}
                        rating={game.rating}
                        description={game.description}
                        tags={game.tags}
                    />
                ))}
            </div>
        </main>
    );
}
