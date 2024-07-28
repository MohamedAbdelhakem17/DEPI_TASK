"use client"
import { Edu_NSW_ACT_Foundation } from "next/font/google";
import Navbar from "./(component)/Navbar";
import { useEffect, useState } from "react";

const inter = Edu_NSW_ACT_Foundation({ subsets: ["latin"], weight: "400" });

export default function SchoolSystemLayout({ children }) {
    const [theme, setTheme] = useState("")
    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
    };

    useEffect(() => {
        const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        if(deviceTheme) 
        document.documentElement.classList.add('dark');
        console.log(deviceTheme)
    }, [])

    return (
        <main className={`w-full min-h-screen  dark:bg-blue-950 bg-yellow-50 ${inter.className}`}>
            <Navbar />
            <div className="p-5 bg-slate-900 m-4"></div>
            <div
                className={`p-5  dark:bg-red-900 bg-red-100 m-4 cursor-pointer`}
                onClick={toggleDarkMode}
            >
                Toggle Dark Mode
            </div>
            {children}
        </main>
    );
}
