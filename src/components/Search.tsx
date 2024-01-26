"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function Search() {
    const router = useRouter();
    const [text, setText] = useState("");
    const [query] = useDebounce(text, 500);

    useEffect(() => {
        if (!query) {
            router.push(`/`);
        }
        router.push(`/?query=${query}`);
    }, [router, query]);
    return (
        <div className="relative rounded-md">
            <input
                value={text}
                placeholder="Enter title or description"
                onChange={(e) => setText(e.target.value)}
                className="flex w-full p-2 rounded bg-slate-900 text-slate-50 max-w-lg focus:outline-none"
            />
        </div>
    );
}
