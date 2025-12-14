export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="bg-zinc-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-zinc-700">
      <div className="flex justify-between items-start">
        <h3 className="text-white font-semibold text-lg">{task.title}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="px-4 py-1 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors duration-200"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task)}
            className="px-4 py-1 rounded-lg bg-red-600 text-white font-medium hover:bg-red-500 transition-colors duration-200"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="mt-3 text-zinc-300 text-sm leading-relaxed">
        {task.description || "No description available"}
      </p>
    </div>
  );
}
