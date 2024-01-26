import FilterCard from "@/components/Filters/FilterCard";
import GameCard from "@/components/GameCard/GameCard";
import NoGameFoundCard from "@/components/GameCard/NoGameFoundCard";
import Search from "@/components/SearchBar/Search";
import TitleH1 from "@/components/Ui/TitleH1";
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

// Since we want to keep the Home a server component we will filer with params
type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Home({ searchParams }: Props) {
    const games = await getData();
    // Can be exported to a separate file
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

    // Ideally this logic should be handled in the server, but for the sake of simplicity doing it here client side
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
            <TitleH1 title={"Video Games Release Tracker"} />

            {/* Search */}
            <Search />
            {/* Tags filter, not using state but search params */}
            <div className="flex gap-2 overflow-auto scrollbar-hide">
                {filters.map((filter) => (
                    <FilterCard
                        key={filter}
                        filterParam={filterParam}
                        filter={filter}
                        href={{ filter: filter }}
                    />
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
                {noGamesFound && <NoGameFoundCard filterParam={filterParam} />}
            </div>
        </main>
    );
}
