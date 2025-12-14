import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-4xl font-semibold text-slate-900">TaskFlow</h1>
        <p className="text-slate-600">
          A calm and simple way to manage your daily tasks.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/login"
            className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-6 py-2 rounded-lg border border-slate-300 hover:bg-slate-100 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
