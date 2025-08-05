import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
export default function TodoList({ todoComplete,deleteTodo,todos }) {

  return (
    <div className="flex flex-col gap-3 my-5">
      {todos?.map((item) => (
        <div className="border-2 py-2 rounded-xl grid grid-col-1 grid-cols-[60px_1fr_60px] gap-2">
          <div className="flex items-center justify-center pl-2">
            <input
              checked={item.status === "complete"}
              onChange={()=>todoComplete(item.id)}
              className="w-6 h-6 border rounded-full cursor-pointer"
              type="checkbox"
            ></input>
          </div>
          <div className="flex flex-col overflow-hidden">
            <div className="font-medium text-xl tracking-wider first-letter:uppercase">
              {item.title}
            </div>
            <div className="text-muted-foreground tracking-wider first-letter:uppercase break-words overflow-hidden">
              {item.description}
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div onClick={()=>deleteTodo(item.id)} className="hover:text-red-500 cursor-pointer text-2xl">
              <MdDeleteOutline />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
