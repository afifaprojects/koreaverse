"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="xl:hidden">

      {/* Menu Button */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="flex min-h-11 min-w-11 items-center justify-center rounded-xl text-slate-700 transition hover:bg-blue-50 hover:text-blue-800"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="absolute left-0 top-full w-full border-t border-slate-200 bg-white shadow-lg shadow-slate-900/10">

          <nav className="mx-auto max-w-screen-xl px-5 py-6">

            <ul className="space-y-2">

              {navigation.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`)) || (item.href === "/learn-korean" && pathname.startsWith("/language")) ? "page" : undefined}
                    className={`block min-h-11 rounded-xl px-4 py-3 font-medium transition ${pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`)) || (item.href === "/learn-korean" && pathname.startsWith("/language")) ? "bg-blue-50 text-blue-900" : "text-slate-700 hover:bg-blue-50 hover:text-blue-800"}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}

            </ul>

            <Link href="/login" onClick={() => setIsOpen(false)} className="mt-6 flex min-h-12 w-full items-center justify-center rounded-xl bg-blue-800 py-3 font-semibold text-white transition hover:bg-blue-900">
              Login
            </Link>

          </nav>

        </div>
      )}
    </div>
  );
}
