import { Member } from "@/types/team";
import MemberName from "./Name1";
import MemberStatus from "./StatusLogo";
import MemberTitle from "./Title1";
import MemberDescription from "./Description1";
import MemberPicture from "./DisplayPicture";
import MemberTenure from "./Tenure";
import UpdateDeleteOps from "./UpdateDeleteOps";
import AdminOnly from "../AdminOnly1";

export default function MemberInfo(props: Member) {
    return (
        <div key={props.user_id + "_card"} className="relative h-max w-4/5 gap-4 flex items-start justify-start bg-[#302370] rounded-2xl shadow-gray-600 shadow-xl">
            <div className="h-full flex justify-start items-start">
                <MemberPicture id={props.s3_url} imageUrl={props.s3_url} height={350} width={350} alt={props.user_name + "_picture"}></MemberPicture>
            </div>
            <div className={`h-full w-2/3 m-2 p-2 flex flex-col justify-start items-start rounded-2xl`}>
                <div className={`w-full flex justify-start items-start gap-2`}>
                    <MemberName id={props.user_id} userName={props.user_name.split(" ").slice(0, 2).join(" ")}></MemberName>
                    <MemberStatus id={props.user_id} userStatus={props.status}></MemberStatus>
                    <AdminOnly>
                        <UpdateDeleteOps id={props.user_id}></UpdateDeleteOps>
                    </AdminOnly>
                </div>
                <MemberTenure id={props.user_id} tenureStart={props.tenure_start} tenureEnd={props.tenure_end}></MemberTenure>
                <MemberTitle id={props.user_id} position={props.position} status={props.status}></MemberTitle>
                <MemberDescription id={props.user_id} description={props.description} status={props.status}></MemberDescription>
            </div>
        </div>
    )
}
