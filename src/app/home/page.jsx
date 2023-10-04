"use client"

import Link from "next/link";
import React, {useState} from "react";
import { useRouter } from "next/router";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'],})

const HomePage = () =>{
    // const router = useRouter();

    return(
        <>
            <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-5">
                <div className={`${satisfy.className} text-8xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent `}>Hello There...</div>
                <div className="text-3xl">This will be you to-Do and to-Don't list</div>
                <div>For the times we needed that reminder of the things we shdn't do</div>
                <div>
                    <Link href="\signup" className="underline">Sign Up</Link>
                    <span> to get started</span>
                </div>
            </div>
        </>
    )
}

export default HomePage;