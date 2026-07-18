import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks/counterHook";

import {
  addTask,
  deleteTask,
  editTask,
  isCompeletedToggle,
} from "../Features/Todo/TodoSlice";

export default function Todo() {
  const dispatch = useAppDispatch();

  const tasks = useAppSelector((state) => state.todo.tasks);

  const [text, setText] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);

  function handleSubmit() {
    if (!text.trim()) return;

    if (editingId !== null) {
      dispatch(
        editTask({
          id: editingId,
          updateTask: text,
        })
      );

      setEditingId(null);
    } else {
      dispatch(
        addTask({
          id: Date.now(),
          task: text,
          isCompeleted: false,
        })
      );
    }

    setText("");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6">

        <h1 className="text-3xl font-bold text-center mb-6">
          Redux Todo
        </h1>

        <div className="flex gap-3 mb-6">

          <input
            type="text"
            placeholder="Enter Task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 border rounded-lg px-4 py-2 outline-none"
          />

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-5 rounded-lg"
          >
            {editingId ? "Update" : "Add"}
          </button>

        </div>

        <div className="space-y-3">

          {tasks.map((item) => (

            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow"
            >

              <div className="flex items-center gap-3">

                <input
                  type="checkbox"
                  checked={item.isCompeleted}
                  onChange={() =>
                    dispatch(isCompeletedToggle(item.id))
                  }
                />

                <p
                  className={`${
                    item.isCompeleted
                      ? "line-through text-gray-500"
                      : ""
                  }`}
                >
                  {item.task}
                </p>

              </div>

              <div className="flex gap-2">

                <button
                  onClick={() => {
                    setEditingId(item.id);
                    setText(item.task);
                  }}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    dispatch(deleteTask(item.id))
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}