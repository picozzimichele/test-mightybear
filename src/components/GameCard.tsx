"use client";
import React from "react";
import { GameContext } from "@/context/GameContext";
import useCountDown from "@/hooks/useCountDown";

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
    const { secondsLeft, startTimer } = useCountDown();
    const todayInSeconds = Math.floor(new Date().getTime() / 1000);
    const releaseDateInSeconds = new Date(releaseDate).getTime();

    function secondsRemainingToReleaseDate({
        releaseDate,
        todayInSeconds,
    }: {
        releaseDate: number;
        todayInSeconds: number;
    }) {
        return releaseDate - todayInSeconds;
    }

    return (
        <div key={id} className="p-4 bg-slate-900 rounded space-y-2">
            <div className="flex">
                <h2 className="text-lg font-semibold grow">{title}</h2>
                <div>${price}</div>
            </div>
            <p></p>
            <p>
                {secondsRemainingToReleaseDate({
                    releaseDate: releaseDateInSeconds,
                    todayInSeconds,
                }) > 0
                    ? `Release in ${secondsLeft} seconds`
                    : "Released"}
            </p>
            <div className="text-sm text-slate-400">
                <p>{rating}</p>
                <p>{description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <p
                        key={tag}
                        className="text-xs border rounded-md p-1 border-gray-700 text-gray-400"
                    >
                        {tag}
                    </p>
                ))}
            </div>
        </div>
    );
}
