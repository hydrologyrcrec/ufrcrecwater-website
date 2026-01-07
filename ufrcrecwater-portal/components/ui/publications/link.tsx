import { PubLink } from "@/types/publications"
import Link from "next/link"

export default function ExternalLink(props: PubLink) {
    return (
        <Link key={props.url} href={props.url}>{props.label}</Link>
    )
}