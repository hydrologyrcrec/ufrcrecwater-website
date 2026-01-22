import { MemTenure } from "@/types/team";

export default function MemberTenure(props: MemTenure){
    function getMonthandYear(date: Date) {
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${month.slice(0, 3)} ${year}`;
    }

    return (
        <p key={props.id + "_tenure"} className="text-md font-medium text-[#aeabab] px-2">{"(" +getMonthandYear(props.tenureStart) + " - " + (props.tenureEnd === "Present" ? "Present" : getMonthandYear(props.tenureEnd)) + ")"}</p>
    )
}