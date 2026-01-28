import { formatDateLong } from "../../../lib/date-conversion";
import { UpdatedDate } from "@/types/home";


export default function DateUpdatedAt(props: UpdatedDate) {
    const date = new Date(props.updated_at);
    return (
        <p className="px-2 text-md font-bold italic text-[#aeabab]" key={date.toISOString()}>{formatDateLong(date)}</p>
    )
}