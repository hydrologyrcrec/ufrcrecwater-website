import Image from "next/image";
import { logosList } from "@/data/publications";
import { menuProps } from "../../header/header";

export function MenuLogo(props: menuProps) {
  return (
    <button
      onClick={() => props.changeMenuStatusProp(!props.menuStatusProp)}
      className="
        xl:hidden
        fixed
        top-5
        right-5
        z-50
        w-12
        h-12
        flex
        items-center
        justify-center
        shrink-0
      "
      aria-label="Toggle menu"
    >
      <Image
        src={props.menuStatusProp ? logosList.close.src : logosList.menu.src}
        alt={props.menuStatusProp ? logosList.close.alt : logosList.menu.alt}
        width={32}
        height={32}
        priority
      />
    </button>
  );
}
