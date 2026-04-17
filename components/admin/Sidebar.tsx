"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname();

  const menu = [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "Jobs", href: "/admin/dashboard/jobs" },
    { name: "Applications", href: "/admin/dashboard/applications" },
    { name: "Contacts", href: "/admin/dashboard/contacts" },
  ];

  return (
    <div className="w-64 bg-black text-white p-5">
      <h2 className="text-xl font-bold mb-8">ASCO Admin</h2>

      {menu.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`block p-2 rounded mb-2 ${
            path === item.href ? "bg-gray-700" : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
