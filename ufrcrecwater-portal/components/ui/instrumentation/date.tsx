import { InsDate } from "@/types/instrument";
import { getMonthandYear, getYear } from "@/utils/formatDate";
import DateLogo from "../DateIcon";


export default function Timeline(props: InsDate) {
    const date_installed = new Date(props.date_installed);
    return (
        <div className="flex justify-start gap-2">
            <DateLogo ></DateLogo>
            <p className="text-white font-medium">{getYear(date_installed) + " - " + (props.date_uninstalled === "current" ? "Present" : getYear(new Date(props.date_uninstalled)))}</p>
        </div>
    )
}