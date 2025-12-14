"use client";

export default function DeleteConfirmModal({ isOpen, onCancel, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-zinc-900 w-full max-w-sm rounded-2xl p-6 space-y-4 shadow-xl transform transition-transform duration-300 scale-100">
        <h3 className="text-lg font-semibold text-white">Delete Task?</h3>

        <p className="text-sm text-zinc-400">
          This action cannot be undone. Are you sure you want to delete this
          task?
        </p>

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onCancel}
            className="px-5 py-2 text-sm rounded-lg border border-zinc-700 text-white hover:bg-zinc-800 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-500 shadow-md hover:shadow-red-400 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
