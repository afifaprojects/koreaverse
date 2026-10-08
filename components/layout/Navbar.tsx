import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import NavbarActions from "./NavbarActions";
import CurrencyToggle from "@/components/common/CurrencyToggle";
import Container from "@/components/common/Container";

export default function Navbar() {
  return (
<header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_5px_24px_-19px_rgba(15,23,42,0.35)] backdrop-blur-xl">
      <div className="h-0.5 w-full bg-gradient-to-r from-blue-800 via-blue-500 to-rose-600" />
      <Container className="px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
        <div className="flex h-[4.75rem] items-center justify-between gap-3 sm:h-20 sm:gap-5">

          {/* Left */}
          <Logo />

          {/* Center */}
          <DesktopMenu />

          {/* Right */}
<div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <CurrencyToggle />
            <NavbarActions />
            <MobileMenu />
          </div>

        </div>
      </Container>
    </header>
  );
}
