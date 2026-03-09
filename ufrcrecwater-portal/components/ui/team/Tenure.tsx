'use client'

import { MemTenure } from "@/types/team";
import { getMonthandYear } from "@/utils/formatDate";

export default function MemberTenure(props: MemTenure) {
    return (
        <p className="text-md font-medium text-[#aeabab] px-2">{getMonthandYear(props.tenureStart) + " - " + (props.tenureEnd === "current" ? "Present" : getMonthandYear(props.tenureEnd))}</p>
    );
}