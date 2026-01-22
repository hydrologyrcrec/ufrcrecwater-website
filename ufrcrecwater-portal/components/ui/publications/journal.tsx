import { Journal } from "@/types/publications";
import Link from "next/link";

export default function JournalName(props: Journal) {
    return (
        <Link key={props.journal_name} href={props.journal_url} className="text-sm text-white">{props.journal_name}</Link>
    );
}