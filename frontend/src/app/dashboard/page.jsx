"use client";

import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <Navbar />

      <main className="p-6 flex flex-col gap-6">
        <div className="bg-zinc-900/80 backdrop-blur-md rounded-xl p-6 shadow-lg space-y-4">
          <h2 className="text-3xl font-semibold text-white">Dashboard</h2>
          <p className="text-zinc-400 text-lg">
            Welcome back! Here’s a quick overview of your workspace.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="/dashboard/tasks"
              className="flex-1 px-6 py-3 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-500 hover:shadow-lg transition-all text-center font-medium ring-1 ring-indigo-400/50"
            >
              View Tasks
            </Link>

            <Link
              href="/dashboard/tasks"
              className="flex-1 px-6 py-3 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-500 hover:shadow-lg transition-all text-center font-medium ring-1 ring-green-400/50"
            >
              Create Task
            </Link>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
