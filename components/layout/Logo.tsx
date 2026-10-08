import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex shrink-0 select-none items-center gap-2.5 sm:gap-3" aria-label="KoreaVerse home">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-800 to-rose-700 text-base font-black tracking-tight text-white shadow-sm sm:h-11 sm:w-11 sm:text-lg">
        K
      </span>
      <span className="leading-none">
        <span className="block whitespace-nowrap text-lg font-bold tracking-tight sm:text-xl">
          <span className="text-blue-800">Korea</span>
          <span className="text-rose-700">Verse</span>
        </span>
        <span className="mt-1 hidden whitespace-nowrap text-[10px] font-medium tracking-wide text-slate-500 md:block">
          Your Complete Korea Guide
        </span>
      </span>
    </Link>
  );
}
