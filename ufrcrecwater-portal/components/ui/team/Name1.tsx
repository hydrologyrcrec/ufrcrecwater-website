'use client'

import { MemName } from "@/types/team";

export default function MemberName(props: MemName){
    return (
        <h2 className="text-xl text-center text-black px-2">{props.userName}</h2>
    )
}