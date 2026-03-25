import { Journal } from "@/types/publications";
import Link from "next/link";

export default function PubJournalName(props: Journal) {
    return (
        <Link key={props.journal_name} href={props.journal_url} className="text-sm text-black" target="_blank" rel="noopener noreferrer">{props.journal_name}</Link>
    );
}