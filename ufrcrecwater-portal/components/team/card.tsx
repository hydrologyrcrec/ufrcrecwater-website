import { Member } from "@/types/team";
import MemberName from "../ui/team/name";
import MemberStatus from "../ui/team/member-status-logo";
import MemberTitle from "../ui/team/title";
import MemberDescription from "../ui/team/description";
import MemberPicture from "../ui/team/member-picture";
import MemberTenure from "../ui/team/member-tenure";

export default function MemberCard(props: Member) {
    return (
        <div key={props.user_id + "_card"} className="h-112 w-64 p-2 gap-1 flex flex-col items-center rounded-4xl bg-[#302370]">
            <div className="px-1 h-max w-60 flex justify-center items-start">
                <MemberPicture id={props.user_id} imageUrl={props.user_id} height={300} width={300} alt={props.user_name + "_picture"}></MemberPicture>
            </div>
            <div className="px-2 flex justify-start gap-2">
                <MemberName id={props.user_id} userName={props.user_name}></MemberName>
                <MemberStatus id={props.user_id} userStatus={props.status}></MemberStatus>
            </div>
            <MemberTenure id={props.user_id} tenureStart={props.tenure_start} tenureEnd={props.tenure_end}></MemberTenure>
            <MemberTitle id={props.user_id} position={props.position}></MemberTitle>
            <MemberDescription id={props.user_id} description={props.description}></MemberDescription>
        </div>
    )
}