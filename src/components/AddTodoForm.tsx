import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function AddTodoForm({updateTodos }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleAddTodo() {
    const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const newTodo = {
      id: Date.now(),
      title,
      description,
      status: "pending",
    };
    const updatedTodos = [...existingTodos, newTodo];
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    updateTodos();
    setIsOpen(false);
    setTitle("");
    setDescription("");
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="w-full h-10 rounded-xl text-center bg-gradient-primary hover:shadow-glow transition-all duration-300 flex items-center justify-center font-medium gap-2"
      >
        <FaPlus className="font-medium text-center" />
        Add New Task
      </button>
    );
  }

  return (
    <div className="p-6 mb-6 bg-gradient-card shadow-medium border border-border/50 rounded-xl">
      <div className="space-y-4">
        <div className="space-y-2">
          <input
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-md py-2 px-4 rounded my-4 bg-background border font-medium w-full"
            autoFocus
          />
          <textarea
            placeholder="Add a description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[80px] resize-none w-full rounded px-4 py-2 border bg-background"
          />
        </div>

        <div className="flex gap-4 pt-2">
          <button
            onClick={handleAddTodo}
            className="rounded-xl bg-gradient-primary hover:shadow-glow font-medium py-2 px-4 rounded-sm"
          >
            Add Task
          </button>
          <button className="font-medium" onClick={() => setIsOpen(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
