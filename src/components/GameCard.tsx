"use client";
import React from "react";
import { GameContext } from "@/context/GameContext";
import useCountDown from "@/hooks/useCountDown";
import StarSvg from "@/public/svg/StarSvg";
import CowntdownTimer from "./CowntdownTimer";

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
    // context is not really needed here, but I'm using it to show how it would be used
    const { games, setGames } = React.useContext(GameContext);

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
            {/* CountDownTimer */}
            <CowntdownTimer />
            <div className="text-sm text-slate-400">
                <p>{rating}</p>
                <p>{description}</p>
            </div>
            <div className="flex w-full gap-2 items-start">
                {[...Array(Math.round(rating))].map((_, index) => (
                    <div key={index} className="h-4 w-4 text-blue-700">
                        <StarSvg />
                    </div>
                ))}
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
