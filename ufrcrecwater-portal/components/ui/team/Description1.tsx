'use client'

import { MemDesc } from "@/types/team";

export default function MemberDescription(props: MemDesc){
    return (
        props.status === "current" && <p className="text-sm text-black font-medium px-2 overflow-scroll">{props.description}</p>
    )
}   