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
    <header className="w-full xl:bg-[#D9E2EC] fixed z-50 xl:border xl:border-blue-300/80">
      {/* WHY: Center the whole header row and keep it responsive */}
      <HeaderMiniNav menuStatusProp={menuStatus} changeMenuStatusProp={setMenuStatus}></HeaderMiniNav>
      <div className={`flex justify-end xl:justify-center w-full`}>
        {/* <HeaderLogo /> */}
        <HeaderNav />
        <div className="h-full flex justify-center items-center">
          <MenuLogo menuStatusProp={menuStatus} changeMenuStatusProp={setMenuStatus}/>
        </div>
      </div>
    </header>
  );
}