"use client";

import React, { useRef, useState } from "react";
import toast, { Toast, Toaster } from "react-hot-toast";
import ToasterBoilerPlate from "@/assets/components/ToasterBoilerPlate";
import Link from "next/link";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({ subsets: ['latin'], weight: ['400'],})


export default function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const handleSubmit = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    if (name === "") {
      toast.error("Name cannot be empty 😔");
    }
    if (email === "") {
      toast.error("Email cannot be empty 😔");
    }
    if (pass === "") {
      toast.error("Password cannot be empty 😔");
    }
  };

  return (
    <>
      <ToasterBoilerPlate/>
      <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-black text-white">
        <div className="flex flex-col gap-5 items-center  p-10 rounded bg-zinc-800">
          <div className={`${satisfy.className} text-4xl` }>Sign Up</div>
          <div className="flex flex-col ">
            <label htmlFor="username">Username :</label>
            <input
              ref={nameRef}
              type="text"
              id="username"
              className="text-black"
              required
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="email">Email:</label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              className="text-black"
              required
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="pass">Password :</label>
            <input
              ref={passRef}
              type="password"
              id="pass"
              className="text-black"
              required
            />
          </div>
            <div className="flex w-[100%] justify-between text-[0.75rem]">
                <div>Already a user ?</div>
                <Link href='\login'  className="underline"  >Login Instead</Link>
            </div>
          <button onClick={handleSubmit} className="w-[100%] py-2 text-[1.25rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">Submit</button>
        </div>
      </div>
    </>
  );
}
