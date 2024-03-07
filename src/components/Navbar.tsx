"use client"
import * as React from "react"
import Link from "next/link"
 
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image  from "next/image"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


function Navbar() {
    const { setTheme } = useTheme()
  return (
    <>
      <div className="place-self-center flex flex-col sm:flex-row justify-between sticky top-3 px-4">
      <NavigationMenu className="h-fit w-fit self-center bg-black/10 dark:bg-white/10 px-4 py-2 rounded-lg backdrop-blur-lg">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Image src="/ecoregen.png" alt="EcoReGen Alliance" width="70" height="70" className="hidden sm:block" />
          </NavigationMenuItem>
          <NavigationMenuItem>
              <h1 className="mx-4 font-custom text-center font-bold text-lg">
                  EcoRegen Alliance
              </h1>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="place-content-center grid-flow-col hidden sm:grid my-4">
          <NavigationMenu className="px-4">
              <NavigationMenuList className="">
                  <NavigationMenuItem>
                      <NavigationMenuTrigger>
                          Auth
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                          <div className="grid m-4 place-content-center z-10">
                              <Button className="mb-2">
                                  <RegisterLink>Sign up</RegisterLink>
                              </Button>
                              <Button>
                                  <LoginLink>Login</LoginLink>
                              </Button>
                          </div>
                      </NavigationMenuContent>
                  </NavigationMenuItem>
              </NavigationMenuList>
          </NavigationMenu>
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
              </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
              System
              </DropdownMenuItem>
          </DropdownMenuContent>
          </DropdownMenu>
      </div>
      </div>
      <div className="place-content-center grid grid-flow-col my-4 pt-2 sm:hidden">
        <NavigationMenu className="px-4">
            <NavigationMenuList className="">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        Auth
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid m-4 place-content-center z-10">
                            <Button className="mb-2">
                                <RegisterLink>Sign up</RegisterLink>
                            </Button>
                            <Button>
                                <LoginLink>Login</LoginLink>
                            </Button>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
            System
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    </div>
    </>
  )
}

export default Navbar
