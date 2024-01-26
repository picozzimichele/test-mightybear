import type { Metadata } from "next";
import { GameContextProvider } from "@/context/GameContext";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Video Games Release Tracker",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} text-slate-50 bg-slate-800`}>
                <GameContextProvider>{children}</GameContextProvider>
            </body>
        </html>
    );
}
