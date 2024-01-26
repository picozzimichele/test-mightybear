import Link from "next/link";
import React from "react";

export default function FilterCard({
    filterParam,
    filter,
    href,
}: {
    filterParam: string;
    filter: string;
    href: { [key: string]: string };
}) {
    return (
        <Link
            href={`?${new URLSearchParams(href)}`}
            key={filter}
            className={`${
                filterParam === filter ? "text-blue-700" : "text-slate-50"
            } p-2 rounded-md text-sm bg-slate-900 `}
        >
            {filter}
        </Link>
    );
}
