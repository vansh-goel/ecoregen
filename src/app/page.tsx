import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="h-full w-full dark:bg-gradient-to-r dark:from-emerald-900 dark:to-green-700 bg-gradient-to-br from-green-400 to-lime-400">
      <Navbar />
      <h1 className="text-white text-6xl">EcoReGen Alliance</h1>
    </main>
  );
}
