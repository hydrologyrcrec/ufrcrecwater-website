import Image from "next/image";
import { logosList } from "@/data/publications";
import { menuProps } from "../../header/header";

export function MenuLogo(props: menuProps) {
  return (
      <Image
        src={props.menuStatusProp? logosList.close.src : logosList.menu.src}
        alt={props.menuStatusProp? logosList.close.alt : logosList.menu.alt}
        width={props.menuStatusProp? 40: 30}
        height={props.menuStatusProp? 40: 30}
        className={`xl:hidden ${props.menuStatusProp && "fixed z-8 pr-6 pt-8"}`}
        priority
        onClick={() => props.changeMenuStatusProp(!props.menuStatusProp)}
      />
  );
}