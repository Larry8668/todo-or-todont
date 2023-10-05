"use client";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { AiOutlinePlus } from "react-icons/ai";
import {FaTrashAlt} from "react-icons/fa";
import { Satisfy } from "next/font/google";

import ToasterBoilerPlate from "@/assets/components/ToasterBoilerPlate";
import ToDoList from "@/assets/components/ToDoList";

const satisfy = Satisfy({ subsets: ["latin"], weight: ["400"] });

export default function MainPage() {
  const [toDoList, setToDoList] = useState([]);
  const [toDontList, setToDontList] = useState([]);

  const LOCAL_STORAGE_KEY_1 = "todo-or-todont.todo";
  const LOCAL_STORAGE_KEY_2 = "todo-or-todont.todont";

  const toDoRef = useRef();
  const toDontRef = useRef();

  const handleAddToDo = () => {
    const toDo = toDoRef.current.value;
    if (toDo === "") {
      toast.error("TODO : fill 'Do' 😔");
      return;
    }
    setToDoList((prev) => {
      return [
        ...prev,
        {
          id: uuidv4(),
          task: toDo,
          type: "do",
          complete: false,
        },
      ];
    });
    toDoRef.current.value = null;
  };
  const handleAddToDont = () => {
    const toDont = toDontRef.current.value;
    if (toDont === "") {
      toast.error("TODONT : submit empty 'Dont' 😔");
      return;
    }
    setToDontList((prev) => {
      return [
        ...prev,
        {
          id: uuidv4(),
          task: toDont,
          type: "dont",
          complete: false,
        },
      ];
    });
    toDontRef.current.value = null;
  };
  const handleToggleTask =(id, type)=>{
    const tempList=(type==='do' ? [...toDoList] : [...toDontList] );
    const toggleTask = tempList.find(ele => ele.id === id);
    console.log(toggleTask);
    toggleTask.complete = !toggleTask.complete;
    console.log(toggleTask);

    
    if(type==='do') setToDoList(tempList);
    else setToDontList(tempList);
  }
  const handleClearCompletedDo = () =>{
    const tempList = toDoList.filter(ele =>{
        return ele.complete != true
    })
    setToDoList(tempList);
  }
  const handleClearCompletedDont = () =>{
    const tempList = toDontList.filter(ele =>{
        return ele.complete != true
    })
    setToDontList(tempList);
  }

  useEffect(() => {
    console.log(localStorage.getItem(LOCAL_STORAGE_KEY_1));
    const toDoVal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_1));
    const toDontVal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_2));

    if (toDoVal) setToDoList(toDoVal);
    if (toDontVal) setToDontList(toDontVal);
  }, []);

  useEffect(() => {
    console.log("1 changed");
    localStorage.setItem(LOCAL_STORAGE_KEY_1, JSON.stringify(toDoList));
  }, [toDoList]);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_2, JSON.stringify(toDontList));
  }, [toDontList]);
  return (
    <>
      <ToasterBoilerPlate />
      <div className="w-[100vw] h-[100vh] flex gap-2 p-5">
        <div className="w-[50%] h-[100%] flex flex-col items-center gap-2 p-3 bg-zinc-900 rounded border-solid border-2 border-zinc-800">
          <div
            className={`${satisfy.className} text-4xl bg-gradient-to-r from-in from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent `}
          >
            To Do
          </div>
          <div className="w-[100%] bg-black border-solid border-2 border-zinc-800 p-2 rounded flex justify-between">
            <div>Tasks left to do <span>{toDoList.length}</span></div>
            <button onClick={handleClearCompletedDo}><FaTrashAlt /></button>            
          </div>
          <div className="w-[100%] bg-black border-solid border-2 border-zinc-800 p-2 rounded flex justify-around">
            <label htmlFor="toDo" className={`${satisfy.className} text-2xl`}>
              Do{" "}
            </label>
            <input
              type="text"
              ref={toDoRef}
              id="toDo"
              className="w-[80%] text-black"
            />
            <button onClick={handleAddToDo}>
              <AiOutlinePlus />
            </button>
          </div>
          <ToDoList List={toDoList} toggleFunc = {handleToggleTask} />
        </div>
        <div className="w-[50%] h-[100%] flex flex-col items-center gap-2 p-3 bg-zinc-900 rounded border-solid border-2 border-zinc-800">
          <div
            className={`${satisfy.className} text-4xl bg-gradient-to-r from-in from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent `}
          >
            To Don't
          </div>
          <div className="w-[100%] bg-black border-solid border-2 border-zinc-800 p-2 rounded  flex justify-between">
            <div>Tasks left not to do <span>{toDontList.length}</span></div>
            <button onClick={handleClearCompletedDont}><FaTrashAlt /></button>            

          </div>
          <div className="w-[100%] bg-black border-solid border-2 border-zinc-800 p-2 rounded flex justify-around">
            <label htmlFor="toDont" className={`${satisfy.className} text-2xl`}>
              Don't{" "}
            </label>
            <input
              type="text"
              ref={toDontRef}
              id="toDont"
              className="w-[80%]  text-black"
            />
            <button onClick={handleAddToDont}>
              <AiOutlinePlus />
            </button>
          </div>
          <ToDoList List={toDontList} toggleFunc = {handleToggleTask} />
        </div>
      </div>
    </>
  );
}
