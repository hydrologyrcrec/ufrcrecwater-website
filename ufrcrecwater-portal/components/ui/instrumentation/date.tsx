import { InsDate } from "@/types/instrument";
import { formatDateLong } from "../../../lib/date-conversion";
import { getMonthandYear } from "@/utils/formatDate";


export default function Timeline(props: InsDate) {
    const date_installed = new Date(props.date_installed);
    return (
        <p className="px-2">{getMonthandYear(date_installed) + " - " + (props.date_uninstalled === "current" ? "Present" : getMonthandYear(new Date(props.date_uninstalled)))}</p>
    )
}