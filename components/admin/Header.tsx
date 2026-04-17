"use client";

import { logout } from "@/lib/auth";

export default function Header() {
  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>

      <button
        onClick={logout}
        className="text-sm bg-red-500 text-white px-4 py-1 rounded"
      >
        Logout
      </button>
    </div>
  );
}
