"use client"

import { Member } from "@/types/team";
import MemberName from "../ui/team/Name1";
import MemberStatus from "../ui/team/StatusLogo";
import MemberTitle from "../ui/team/Title1";
import MemberDescription from "../ui/team/Description1";
import MemberPicture from "../ui/team/DisplayPicture";
import MemberTenure from "../ui/team/Tenure";
import UpdateDeleteOps from "../ui/team/UpdateDeleteOps";
import AdminOnly from "../ui/AdminOnly1";

export default function MemberInfo(props: Member) {
    return (
        <div key={props.user_id + "_card"} className="relative h-150 w-84 md:h-80 md:w-180 lg:w-200 flex flex-col md:flex-row md:items-stretch md:justify-start items-stretch justify-start bg-[#D9E2EC] shadow-gray-600 rounded-2xl shadow-xl">
            <div className="md:w-80 md:h-80 w-full md:rounded-l-2xl md:rounded-t-none rounded-t-2xl flex justify-start items-start shrink-0 overflow-clip">
                <MemberPicture id={props.s3_url} imageUrl={props.s3_url} height={350} width={350} alt={props.user_name + "_picture"}></MemberPicture>
            </div>
            <div className={`h-full md:w-2/3 flex overflow-scroll self-stretch`}>
                <div className="p-4 flex flex-1 flex-col justify-start items-start self-stretch rounded-2xl">
                    <div className={`w-full flex justify-start items-start gap-2`}>
                        <MemberName id={props.user_id} userName={props.user_name.split(" ").slice(0, 2).join(" ")}></MemberName>
                        <MemberStatus id={props.user_id} status={props.tenure_end}></MemberStatus>
                        {/* <AdminOnly>
                            <UpdateDeleteOps id={props.user_id}></UpdateDeleteOps>
                        </AdminOnly> */}
                    </div>
                    <MemberTenure id={props.user_id} tenureStart={props.tenure_start} tenureEnd={props.tenure_end}></MemberTenure>
                    <MemberTitle id={props.user_id} position={props.position} status={props.tenure_end}></MemberTitle>
                    <MemberDescription id={props.user_id} description={props.description} status={props.tenure_end}></MemberDescription>
                </div>
            </div>
        </div>
    )
}
