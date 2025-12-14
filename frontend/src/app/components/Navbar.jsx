"use client";

import Link from "next/link";
import { useAuth } from "../store/authStore";
import { useRouter } from "next/navigation";
import { clearAuth } from "../lib/auth";

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    clearAuth();
    logoutUser();
    router.push("/login");
  };

  return (
    <nav className="bg-zinc-900 border-b border-zinc-700 px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo / App Name */}
      <Link href="/dashboard" className="text-2xl font-bold text-indigo-500">
        TaskFlow
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link
          href="/dashboard"
          className="text-zinc-300 hover:text-indigo-400 transition"
        >
          Dashboard
        </Link>
        <Link
          href="/dashboard/tasks"
          className="text-zinc-300 hover:text-indigo-400 transition"
        >
          Tasks
        </Link>

        {/* User info + Logout */}
        <div className="flex items-center gap-4">
          {user && (
            <span className="text-zinc-300 text-sm font-medium">
              Hello, {user.name}
            </span>
          )}

          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition shadow-md"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
