import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-[100%] dark:bg-gradient-to-r dark:from-emerald-900 dark:to-green-700 bg-gradient-to-br from-green-400 to-lime-400">
      <Navbar />
      <div id="content-box" className="grid place-content-center grid-flow-row">
        <div className="m-8 h-fit dark:bg-white/10 bg-black/10 rounded-xl grid place-content-center 
        shadow-lg ring-black ring-offset-4">
          <div className="grid grid-flow-row md:grid-flow-col place-content-center">
            <div className="p-6">
              <div className="text-7xl font-bold tracking-tighter text-emerald-100 dark:text-emerald-400 leading-[70px] text-ellipsis max-md:max-w-full md:text-5xl lg:text-7xl max-md:text-2xl max-md:leading-10">
                Revitalizing Earth Together
              </div>
              <div className="mt-4 text-2xl leading-7 text-gray-200 max-md:max-w-full">
                Empower nature's climate warriors.
              </div>
              <Link href="/">
                <Button className="mt-4 dark:bg-green-200 bg-lime-500 text-amber-100 dark:text-green-800 dark:hover:bg-green-700 dark:hover:text-green-200 hover:bg-amber-100 hover:text-lime-500">
                  START YOUR JOURNEY
                </Button>
              </Link>
            </div>
            <div className="self-center">
              <Image
                src="/image1.png"
                alt="EcoReGen Alliance"
                width="500"
                height="500"
                className="rounded-xl px-12 h-fit"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full items-center px-20 font-bold bg-emerald-50 max-md:px-5 max-md:max-w-full place-self-center rounded-t-2xl dark:bg-green-700 shadow-lg ring-black ring-1 ring-offset-emerald-300">
          <div className="mt-12 text-3xl sm:text-2xl md:text-3xl text-lime-600 dark:text-lime-400 ">
            Our Commitment
          </div>
          <div className="mt-2 mb-16 lg:text-6xl md:text-4xl sm:text-2xl dark:text-emerald-50 text-emerald-900 leading max-md:mb-10 max-md:max-w-full leading-[30px]">
            Dedicated to utilizing algae as a sustainable solution for carbon
            capture, fostering a healthier planet.
          </div>
        </div>
        <div className="grid w-full dark:bg-green-200 place-content-center bg-green-500/30">
          <div className="mt-12 text-3xl sm:text-2xl md:text-3xl text-center mb-12 text-emerald-50 dark:text-emerald-800 ">
            Our Approach
          </div>
          <div className="grid grid-flow-row md:grid-flow-col gap-4 content-center px-12 py-8">
            <div className="grid grid-flow-row place-content-center w-full">
              <div className="grid aspect-square rounded-[50px] w-[40px] place-content-center bg-emerald-900 text-emerald-50">
                1
              </div>
              <h1 className="text-emerald-50 text-3xl my-2 dark:text-emerald-900">
                Algae Development
              </h1>
              <div className="mt-2 text-sm leading-5 text-emerald-600 text-ellipsis">
                Implementing strategic algae cultivation to maximize carbon absorption and
                storage.
              </div>
            </div>
            <div>
              <div className="grid aspect-square rounded-[50px] w-[40px] place-content-center bg-emerald-900 text-emerald-50">
                2
              </div>
              <h1 className="text-emerald-50 text-3xl my-2 dark:text-emerald-900">
                Token Rewards
              </h1>
              <div className="mt-2 text-sm leading-5 text-emerald-600 text-ellipsis">
                Earn tokens for your contributions to our carbon sequestration efforts
                through algae.
              </div>
            </div>
            <div>
              <div className="grid aspect-square rounded-[50px] w-[40px] place-content-center bg-emerald-900 text-emerald-50">
                3
              </div>
              <h1 className="text-emerald-50 text-3xl my-2 dark:text-emerald-900">
                Data Transparency
              </h1>
              <div className="mt-2 text-sm leading-5 text-emerald-600 text-ellipsis">
                Ensuring transparent verification of our ecosystem's data integrity and
                progress.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
