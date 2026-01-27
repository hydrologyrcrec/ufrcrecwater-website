import Link from "next/link";
import { Page } from "@/config/navigation"; 

export default function PageLink(props: Page){
    return (
        <Link
        href={props.href}
        className="text-lg font-normal"
      >
        {props.heading}
      </Link>
    )
}