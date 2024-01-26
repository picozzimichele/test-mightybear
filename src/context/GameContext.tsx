"use client";
import { ReactNode, createContext, useState } from "react";

export const GameContext = createContext({
    games: [],
    setGames: (games: any) => {},
});

export const GameContextProvider = ({ children }: { children: ReactNode }) => {
    const [games, setGames] = useState([]);

    return <GameContext.Provider value={{ games, setGames }}>{children}</GameContext.Provider>;
};
