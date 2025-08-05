import { useState,useEffect } from "react";
import  AddTodoForm from "./../components/AddTodoForm";
import Logo from '@/components/Logo';
import Stats from "@/components/Stats";
import NoTodo from "@/components/NoTodo";
import TodoList from "@/components/TodoList";

const Todo = () => {
  const [todos,setTodos] = useState([]);
  const [stats,setStats] = useState({
    total : 0,
    completed : 0,
    pending : 0,
  });

function updateStats(todo) {
  let complete = 0;  
  for(let i of todo) if(i.status == "complete") complete++;
  setStats({
    total : todo.length,
    completed : complete,
    pending : todo.length - complete
  });
}  

function updateTodos() {
  const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
  setTodos(existingTodos);
  updateStats(existingTodos);
}

function deleteTodo(id) {
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  setTodos(updatedTodos);
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
  updateStats(updatedTodos);
}

function todoComplete(id){
  let updatedTodos = [];
   for(let todo of todos)
   {
      if(todo.id == id) updatedTodos.push({
        id : todo.id,
        title : todo.title,
        description : todo.description,
        status : todo.status == "complete" ? "pending" : "complete"
      })
      else updatedTodos.push(todo);
   }
   setTodos(updatedTodos);
   localStorage.setItem("todos",JSON.stringify(updatedTodos));
   updateStats(updatedTodos);
}


useEffect(()=>{
  updateTodos();
},[]);


  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Logo />
        <Stats stats={stats}/>
        <AddTodoForm updateTodos={updateTodos}/>
        {todos.length > 0 ? <TodoList todoComplete={todoComplete} deleteTodo={deleteTodo} todos={todos}/> : <NoTodo />}
      </div>
    </div>
  );
};

export default Todo;
