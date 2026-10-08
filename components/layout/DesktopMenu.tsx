"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";

export default function DesktopMenu() {
  const pathname = usePathname();

  return (
    <nav className="hidden min-w-0 flex-1 xl:block" aria-label="Main navigation">
      <ul className="flex items-center justify-center gap-0">
        {navigation.map((item) => {
          const active = pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(`${item.href}/`)) ||
            (item.href === "/learn-korean" && pathname.startsWith("/language"));

          return (
            <li key={item.title}>
              <Link
                href={item.href}
                className={`group relative whitespace-nowrap rounded-lg px-2 py-3 text-xs font-semibold tracking-wide transition-colors duration-200 2xl:px-2.5 2xl:text-[13px]
                ${
                  active
                    ? "text-blue-800"
                    : "text-slate-600 hover:bg-blue-50/80 hover:text-blue-800"
                }`}
              >
                {item.title}

                <span
                  className={`absolute bottom-1 left-2.5 h-0.5 rounded-full bg-rose-600 transition-all duration-300
                  ${
                    active
                      ? "right-2.5"
                      : "right-2.5 w-0 group-hover:w-[calc(100%-1.25rem)]"
                  }`}
                ></span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
