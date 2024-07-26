"use client"
import { Edu_NSW_ACT_Foundation } from "next/font/google";
import Navbar from "./(component)/Navbar";

const inter = Edu_NSW_ACT_Foundation({ subsets: ["latin"], weight: "400" });

export default function SchoolSystemLayout({ children }) {
    return (

        <>
            <Navbar />
            <div className="p-5 bg-slate-900 m-4"></div>
            <div className="p-5 dark:bg-red-900 m-4 bg-red-100"
                onClick={() => {
                    document.documentElement.classList.toggle("dark")
                }}
            ></div>
            {children}
        </>

    );
}

