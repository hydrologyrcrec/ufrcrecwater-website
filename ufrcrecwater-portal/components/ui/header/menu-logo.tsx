import Image from "next/image";
import { logosList } from "@/data/publications";
import { menuProps } from "../../header/header";

export function MenuLogo(props: menuProps) {
  return (
      <Image
        src={props.menuStatusProp? logosList.close.src : logosList.purplemenu.src}
        alt={props.menuStatusProp? logosList.close.alt : logosList.purplemenu.alt}
        width={props.menuStatusProp? 40: 30}
        height={props.menuStatusProp? 40: 30}
        className={`xl:hidden ${props.menuStatusProp && "fixed z-4 pr-6"}`}
        priority
        onClick={() => props.changeMenuStatusProp(!props.menuStatusProp)}
      />
  );
}