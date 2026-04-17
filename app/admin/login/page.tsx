"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import Swal from "sweetalert2";
import { User, Lock } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.replace("/admin/dashboard");
    }
  }, [router]);

  const login = async () => {
    if (!username || !password) {
      return Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please enter username and password",
      });
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.access_token);

      router.replace("/admin/dashboard");
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: err?.response?.data?.message || "Invalid username or password",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-black">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center text-white overflow-hidden">
        {/* Gradient blob */}
        <div className="absolute w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center max-w-md">
          <h1 className="text-4xl font-bold mb-4">ASCO Admin</h1>
          <p className="text-white/70 leading-relaxed">
            Manage jobs, applications, and content from a centralized dashboard
            with ease and control.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* GLASS CARD */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white text-center mb-2">
              Welcome Back
            </h2>
            <p className="text-white/60 text-sm text-center mb-6">
              Login to your admin account
            </p>

            {/* USERNAME */}
            <div className="relative mb-4">
              <User className="absolute left-3 top-3 text-white/40" size={18} />
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative mb-6">
              <Lock className="absolute left-3 top-3 text-white/40" size={18} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* BUTTON */}
            <button
              onClick={login}
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Login"
              )}
            </button>
          </div>

          {/* FOOTER */}
          <p className="text-center text-xs text-white/40 mt-6">
            © {new Date().getFullYear()} ASCO. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
