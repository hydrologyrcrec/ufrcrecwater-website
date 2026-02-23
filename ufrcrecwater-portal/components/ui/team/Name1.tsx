"use client"

import { MemName } from "@/types/team";

export default function MemberName(props: MemName){
    return (
        <h2 className="text-xl text-center text-white px-2">{props.userName}</h2>
    )
}