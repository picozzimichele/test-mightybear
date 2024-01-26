import GameCard from "@/components/GameCard";
import Search from "@/components/Search";
import { Game } from "@/lib/game/game";
import Link from "next/link";

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

// Since we want to keep the Home a server component we will filer with params
type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Home({ searchParams }: Props) {
    const games = await getData();
    const filters = [
        "Any",
        "Action",
        "Adventure",
        "RPG",
        "Strategy",
        "Simulation",
        "Sports",
        "Racing",
        "Puzzle",
    ];

    const filterParam = (searchParams.filter as string) || "Any";
    const queryParam = (searchParams.query as string) || "";

    console.log(games);

    const filteredGames = games.filter((game) => {
        if (searchParams.query) {
            return (
                game.title.toLowerCase().includes(queryParam.toLowerCase()) ||
                game.description.toLowerCase().includes(queryParam.toLowerCase())
            );
        }

        if (!searchParams.filter) {
            return true;
        }

        if (searchParams.filter === "Any") {
            return true;
        }

        return game.tags.includes(searchParams.filter as string);
    });

    const noGamesFound = filteredGames.length === 0 && filterParam !== "Any";

    return (
        <main className="flex min-h-screen flex-col p-6 gap-6">
            <h1 className="text-3xl font-bold">Video Games Release Tracker</h1>

            {/* Search */}
            <Search />
            {/* Tags filter, not using state but search params */}
            <div className="flex gap-2 overflow-auto scrollbar-hide">
                {filters.map((filter) => (
                    <Link
                        href={`?${new URLSearchParams({ filter: filter })}`}
                        key={filter}
                        className={`${
                            filterParam === filter ? "text-blue-700" : "text-slate-50"
                        } p-2 rounded-md text-sm bg-slate-900 `}
                    >
                        {filter}
                    </Link>
                ))}
            </div>

            {/* Games */}
            <div className="grid grid-cols-auto gap-4">
                {filteredGames.map((game) => (
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
                {noGamesFound && (
                    <Link
                        className="bg-slate-900 p-4 rounded-md text-sm flex flex-col gap-2 font-medium"
                        href={`?${new URLSearchParams({ filter: "Any" })}`}
                    >
                        <p>No Games Found under {filterParam} category</p>
                        <p>Click here to clear filters</p>
                    </Link>
                )}
            </div>
        </main>
    );
}
