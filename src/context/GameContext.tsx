"use client";
import { ReactNode, createContext, useState } from "react";

export const GameContext = createContext({});

export const GameContextProvider = ({ children }: { children: ReactNode }) => {
    const [games, setGames] = useState([]);

    return <GameContext.Provider value={{ games, setGames }}>{children}</GameContext.Provider>;
};
