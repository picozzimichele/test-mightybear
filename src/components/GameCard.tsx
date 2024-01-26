"use client";
import React from "react";
import { GameContext } from "@/context/GameContext";

export default function GameCard({
    id,
    title,
    price,
    releaseDate,
    rating,
    description,
    tags,
}: {
    id: number;
    title: string;
    price: number;
    releaseDate: number;
    rating: number;
    description: string;
    tags: string[];
}) {
    const { games, setGames } = React.useContext(GameContext);
    console.log(games);
    return (
        <div key={id} className="p-4 bg-slate-900 rounded space-y-2">
            <div className="flex">
                <h2 className="text-lg font-semibold grow">{title}</h2>
                <div>${price}</div>
            </div>
            <p>{releaseDate}</p>
            <div className="text-sm text-slate-400">
                <p>{rating}</p>
                <p>{description}</p>
                <p>{tags}</p>
            </div>
        </div>
    );
}
