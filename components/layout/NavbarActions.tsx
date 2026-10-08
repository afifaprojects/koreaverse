import Link from "next/link";
import { Search } from "lucide-react";

export default function NavbarActions() {
  return (
    <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">

      {/* Search Button */}

      <Link
        href="/search"
        aria-label="Search"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
      >
        <Search size={20} />
      </Link>

      {/* Login */}

      <Link href="/login" className="hidden min-h-10 items-center justify-center rounded-xl bg-blue-800 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 xl:inline-flex 2xl:px-5">
        Login
      </Link>

    </div>
  );
}
