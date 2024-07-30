import { Edu_NSW_ACT_Foundation } from "next/font/google";
import Navbar from "./(component)/Navbar";

const inter = Edu_NSW_ACT_Foundation({ subsets: ["latin"], weight: "400" });

export default function SchoolSystemLayout({ children }) {

    return (
        <main className={`w-full min-h-screen ${inter.className}`}>
            <Navbar />
            {children}
        </main>
    );
}
