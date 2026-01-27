'use client'

import { useState } from "react";
import { HeaderLogo } from "../ui/header/header-logo";
import { MenuLogo } from "../ui/header/menu-logo";
import { HeaderNav } from "./header-nav";
import { HeaderMiniNav } from "./header-mininav";

export type menuProps = {
  menuStatusProp: boolean, 
  changeMenuStatusProp: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * Header (Logo + Navigation)
 * WHY:
 * - Keeps layout responsibility here (composition)
 * - Delegates logo and navigation to focused components (separation of concerns)
 */
export default function Header() {
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <header className="w-full">
      {/* WHY: Center the whole header row and keep it responsive */}
      <HeaderMiniNav menuStatusProp={menuStatus} changeMenuStatusProp={setMenuStatus}></HeaderMiniNav>
      <div className={`flex justify-between xl:justify-center xl:gap-2 px-6 py-2 w-full items-center`}>
        <HeaderLogo />
        <HeaderNav />
        <div className="h-full flex justify-center items-center">
          <MenuLogo menuStatusProp={menuStatus} changeMenuStatusProp={setMenuStatus}/>
        </div>
      </div>
    </header>
  );
}