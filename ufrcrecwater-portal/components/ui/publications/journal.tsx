import { Journal } from "@/types/publications";

export default function JournalName(props: Journal) {
    return (
        <p className="text-sm text-white">{props.journal_name}</p>
    );
}