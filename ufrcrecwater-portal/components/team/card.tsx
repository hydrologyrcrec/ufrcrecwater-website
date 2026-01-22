import { Member } from "@/types/team";
import MemberName from "../ui/team/name";
import MemberStatus from "../ui/team/member-status-logo";
import MemberTitle from "../ui/team/title";
import MemberDescription from "../ui/team/description";
import MemberPicture from "../ui/team/member-picture";
import MemberTenure from "../ui/team/member-tenure";

export default function MemberCard(props: Member) {
    return (
        <div key={props.user_id + "_card"} className="h-max w-4/5 p-4 gap-1 flex items-start rounded-2xl">
            <div className="h-full w-1/3 p-2 flex justify-start items-start">
                <MemberPicture
                    id={props.s3_url}
                    imageUrl={props.s3_url}
                    height={450}
                    width={450}
                    alt={props.user_name + "_picture"}
                ></MemberPicture>
            </div>
            <div className="h-full w-2/3 m-2 p-2 flex flex-col justify-start items-start bg-[#302370] rounded-2xl">
                <div className="px-2 flex justify-start items-start gap-2">
                    <MemberName id={props.user_id} userName={props.user_name.split(" ").slice(0, 2).join(" ")}></MemberName>
                    <MemberStatus id={props.user_id} userStatus={props.status}></MemberStatus>
                </div>
                <MemberTenure id={props.user_id} tenureStart={props.tenure_start} tenureEnd={props.tenure_end}></MemberTenure>
                <MemberTitle id={props.user_id} position={props.position}></MemberTitle>
                <MemberDescription id={props.user_id} description={props.description}></MemberDescription>
            </div>
        </div>
    )
}
