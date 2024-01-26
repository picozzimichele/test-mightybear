import Link from "next/link";
import React from "react";

export default function NoGameFoundCard({ filterParam }: { filterParam: string }) {
    return (
        <Link
            className="bg-slate-900 p-4 rounded-md text-sm flex flex-col gap-2 font-medium"
            href={`?${new URLSearchParams({ filter: "Any" })}`}
        >
            <p>No Games Found under {filterParam} category</p>
            <p>Click here to clear filters</p>
        </Link>
    );
}
