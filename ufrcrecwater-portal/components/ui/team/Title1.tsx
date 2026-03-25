'use client'

import { MemTitle } from "@/types/team";

export default function MemberTitle(props: MemTitle){
    return (
        <h2 className="px-2 text-lg text-start font-semibold text-black">{props.position}</h2>
    )
}