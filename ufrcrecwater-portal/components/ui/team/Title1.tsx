'use client'

import { MemTitle } from "@/types/team";

export default function MemberTitle(props: MemTitle){
    return (
        <h2 className="px-2 text-lg text-start font-semibold text-white">{props.position}</h2>
    )
}