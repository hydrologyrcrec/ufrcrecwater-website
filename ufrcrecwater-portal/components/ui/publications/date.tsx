import { Pubdate } from "@/types/publications";
import { formatDateLong } from "../../../lib/date-conversion";

export default function DatePublished(props: Pubdate) {
    const date = new Date(props.date_published);
    return (
        <p key={date.toISOString()}>{formatDateLong(date)}</p>
    )
}