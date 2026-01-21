import { PubLink } from "@/types/publications"
import Link from "next/link"

export default function ExternalLink(props: PubLink) {
    return (
        <Link key={props.publication_url} href={props.publication_url}>{props.label}</Link>
    )
}