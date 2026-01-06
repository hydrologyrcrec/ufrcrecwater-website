import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";

/**
 * Header (Logo + Navigation)
 * WHY:
 * - Keeps layout responsibility here (composition)
 * - Delegates logo and navigation to focused components (separation of concerns)
 */
export default function Header() {
  return (
    <header className="w-full">
      {/* WHY: Center the whole header row and keep it responsive */}
      <div className="flex w-full items-center justify-center gap-2 px-6 py-2">
        <HeaderLogo />
        <HeaderNav />
      </div>
    </header>
  );
}