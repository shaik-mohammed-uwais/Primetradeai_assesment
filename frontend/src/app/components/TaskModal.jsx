"use client";

import { useState, useEffect } from "react";

export default function TaskModal({ isOpen, onClose, onSave, existingTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (existingTask) {
      setTitle(existingTask.title);
      setDescription(existingTask.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [existingTask]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!title.trim()) return;

    onSave({
      ...existingTask,
      title,
      description,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-zinc-900 w-full max-w-md rounded-2xl p-6 space-y-5 shadow-xl transform transition-transform duration-300 scale-100">
        <h3 className="text-xl font-semibold text-white">
          {existingTask ? "Edit Task" : "Create New Task"}
        </h3>

        <input
          placeholder="Task title"
          className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description (optional)"
          rows="4"
          className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm rounded-lg border border-zinc-700 text-white hover:bg-zinc-700 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
