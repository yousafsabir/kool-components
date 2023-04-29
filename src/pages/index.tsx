import Image from "next/image";
import { Inter } from "next/font/google";
import DarkModeToggle from "@/components/darkModeToggle/DarkModeToggle";
import HamburgerMenu from "@/components/hamburgerMenu/HamburgerMenu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const components = [<DarkModeToggle />, <HamburgerMenu />];
    return (
        <main
            className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
        >
            <h1 className="font-bold text-5xl mb-5">
                Gonna be a site with Kool tsx components
            </h1>
            <main className="grid grid-cols-2 max-w-3xl">
                {components.map((component, i) => (
                    <article className="py-4 px-2 w-[300px]" key={i}>{component}</article>
                ))}
            </main>
        </main>
    );
}
