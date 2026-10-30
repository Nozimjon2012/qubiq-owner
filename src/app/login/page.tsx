'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      // Hozircha istalgan matnli login va parol bilan kirishga ruxsat beramiz
      // Keyinchalik bazadagi school adminlar bilan solishtiriladi
      router.push('/school-admin');
    } else {
      alert('Iltimos, login va parolni kiriting!');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-xl border border-slate-100 space-y-6">
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-extrabold text-[#0B1220]">QUBIQ School Admin</h1>
          <p className="text-sm text-slate-500">Owner tomonidan berilgan matnli login va parol bilan kiring</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Matnli Login</label>
            <input
              type="text"
              placeholder="Masalan: school45_admin"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border rounded-xl text-sm outline-none focus:border-blue-600 font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Parol</label>
            <input
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-xl text-sm outline-none focus:border-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#0B1220] hover:bg-slate-800 text-white rounded-xl font-medium text-sm transition shadow-md"
          >
            Tizimga Kirish
          </button>
        </form>

        <div className="text-center pt-2">
          <a href="/owner" className="text-xs text-slate-400 hover:text-slate-600 font-medium">
            ← Tizim Egasining (Owner) Paneliga o'tish
          </a>
        </div>
      </div>
    </div>
  );
}
