"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 hover:border-blue-600"
    >
      {dark ? (
        <Sun size={20} className="text-amber-500" />
      ) : (
        <Moon size={20} className="text-slate-600" />
      )}
    </button>
  );
}
