'use client'

import { Member } from "@/types/team";
import { useSelectionStore } from "@/store/dataOpsStore";
import MemberForm from "../ui/team/EditForm";
import MemberInfo from "../ui/team/MemberInfo";

export default function MemberCard(props: Member) {
    const {saveState, cardId} = useSelectionStore()
    return (
        // (saveState && cardId === props.user_id)?
        // <MemberForm {...props} /> :
        <MemberInfo {...props} />
    )
}