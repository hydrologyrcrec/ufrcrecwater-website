'use client'

import { Member } from "@/types/team";
import { useSelectionStore } from "@/store/dataOpsStore";
import MemberForm from "../ui/team/EditForm";
import MemberInfo from "../ui/team/MemberInfo";

export default function MemberCard(props: Member) {
    const {saveState, cardId} = useSelectionStore()
    if (saveState && cardId === props.user_id) {
        return <MemberForm {...props} />
    }
    return <MemberInfo {...props} />
}