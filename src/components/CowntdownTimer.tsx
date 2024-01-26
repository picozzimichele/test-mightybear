"use client";
import React, { useEffect, useState } from "react";

// made the releaseDate optional, so it can be used in the GameCard component put christmas 2024 for all games as dummy data
export default function CowntdownTimer({ releaseDate }: { releaseDate?: number }) {
    const [loading, setLoading] = useState(true);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date("12/31/2024 23:59:59");
        // Update the interval in spans on one second interval
        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            // Thanks Chat GPT :D
            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);
        }, 1000);

        return () => {
            clearInterval(interval);
            if (days !== 0 && hours !== 0 && minutes !== 0 && seconds !== 0) setLoading(false);
        };
    }, [days, hours, minutes, seconds]);

    return (
        <div className="flex w-full text-xs gap-2">
            {loading ? (
                <div className="w-full rounded-lg h-10 bg-gray-700 animate-pulse"></div>
            ) : (
                <p>
                    {days} days, {hours} hours, {minutes} minutes, {seconds} seconds to release!
                </p>
            )}
        </div>
    );
}
