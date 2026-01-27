import { InsDate } from "@/types/instrument";
import { formatDateLong } from "../../../lib/date-conversion";


export default function DateInstalled(props: InsDate) {
    const date = new Date(props.date_installed);
    return (
        <p className="px-2" key={date.toISOString()}>{formatDateLong(date)}</p>
    )
}