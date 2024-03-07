import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="h-[100vh] w-[100vw] dark:bg-gradient-to-r dark:from-emerald-900 dark:to-green-700 bg-gradient-to-br from-green-400 to-lime-400">
      <Navbar />
      <div className="m-8 h-[70%] dark:bg-white/10 bg-black/10 rounded-xl grid place-content-center 
      shadow-lg ring-black ring-offset-4 -z-10">
        <div className="grid grid-flow-col">
          <div>
            <div className="text-7xl font-bold tracking-tighter text-emerald-100 dark:text-emerald-400 leading-[70px] text-ellipsis max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Revitalizing Earth Together
            </div>
            <div className="mt-4 text-2xl leading-7 text-gray-200 max-md:max-w-full">
              Empower nature's climate warriors.
            </div>
          </div>
          <div>
            <Image
              src="/image1.png"
              alt="EcoReGen Alliance"
              width="500"
              height="500"
              className="rounded-xl px-12"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
