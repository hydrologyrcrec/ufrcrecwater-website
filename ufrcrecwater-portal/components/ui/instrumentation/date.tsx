import { InsDate } from "@/types/instrument";
import { getMonthandYear } from "@/utils/formatDate";
import DateLogo from "../Icon1";


export default function Timeline(props: InsDate) {
    const date_installed = new Date(props.date_installed);
    return (
        <div className="px-2 py-1 flex justify-start gap-2">
            <DateLogo ></DateLogo>
            <p className="text-white font-medium">{getMonthandYear(date_installed) + " - " + (props.date_uninstalled === "current" ? "Present" : getMonthandYear(new Date(props.date_uninstalled)))}</p>
        </div>
    )
}