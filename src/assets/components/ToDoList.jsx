import React from 'react'

export default function ToDoList({List, toggleFunc}) {
  return (
    <div className="w-[100%] h-[100%]  bg-black border-solid border-2 border-zinc-800 p-2 rounded overflow-auto break-words">
            {List.length != 0 ? (
              List.map((ele) => (
                <div key={ele.id}>
                <div
                  
                  className="w-[100%] p-2 flex gap-7 text-white "
                >
                  <input type="checkbox" checked={ele.complete} id={ele.id} onChange={()=>toggleFunc(ele.id, ele.type)} />
                  <label htmlFor={ele.id}>{ele.task}</label>
                </div>
                <hr />
                </div>
              ))
            ) : (
              <div className="w-[100%] h-[100%] flex item-center justify-center">
                {" "}
                Nothing to show
              </div>
            )}
          </div>
  )
}
