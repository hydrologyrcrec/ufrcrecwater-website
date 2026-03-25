'use client'

import { MemTenure } from "@/types/team";
import { getMonthandYear } from "@/utils/formatDate";
import DateLogo from "../DateIcon";

export default function MemberTenure(props: MemTenure) {
    return (
        <div className="px-2 py-1 flex justify-start gap-2">
            <DateLogo></DateLogo>
            <p className="text-md font-medium text-black">{getMonthandYear(props.tenureStart) + " - " + (props.tenureEnd === "current" ? "Present" : getMonthandYear(props.tenureEnd))}</p>
        </div>
    );
}