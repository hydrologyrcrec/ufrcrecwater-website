'use client'

import { Member } from "@/types/team";
import MemberPicture from "./DisplayPicture";
import SaveCancelOps from "./SaveCancelOps";
import AdminOnly from "../AdminOnly1";
import { useSelectionStore } from "@/store/dataOpsStore";
import { InputHTMLAttributes, useState } from "react";
import { GenericField } from "../GenericField1";
import { toInputDate } from "@/utils/formatDate";

export default function MemberForm(props: Member) {
    const {editState, deleteState, saveState, cancelState, cardId, setCardId, setEditState, setDeleteState, setSaveState, setCancelState} = useSelectionStore()
    const isPresentInitially = props.tenure_end === "current";
    const [current, setCurrent] = useState(isPresentInitially);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, user_id: string) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = data.get(user_id + "_name"); 
        const tenure_start = data.get(user_id + "_tenure_start");
        const tenure_end = data.get(user_id + "_tenure_end");          
        const title = data.get(user_id + "_title");
        const description = data.get(user_id + "_desc");
        setCardId("");
        setEditState(true);
        setDeleteState(true);
        setSaveState(false);
        setCancelState(false);
    }
    return (
        <form key={props.user_id + "_card"} className="relative h-max w-4/5 gap-4 flex items-start justify-start bg-gray-600 rounded-2xl shadow-gray-600 shadow-xl" onSubmit={(e) => handleSubmit(e, props.user_id)}>
            <div className="h-full flex justify-start items-start">
                <MemberPicture id={props.s3_url} imageUrl={props.s3_url} height={350} width={350} alt={props.user_name + "_picture"}></MemberPicture>
            </div>
            <div className={`h-full w-2/3 m-2 p-2 flex flex-col justify-start items-start rounded-2xl`}>
                <div className={`w-full flex justify-start items-start gap-2`}>
                    <GenericField id={props.user_id + "_name"} name={props.user_id + "_name"} label="Name" type="text" elementProps={{defaultValue: props.user_name}}></GenericField>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-2">
                        <GenericField id={props.user_id + "_tenure_start"} name={props.user_id + "_tenure_start"} label="Start Date" type="date" elementProps={{ defaultValue: toInputDate(props.tenure_start) }}/>
                        {!current && <GenericField
                            id={props.user_id + "_tenure_end"}
                            name={props.user_id + "_tenure_end"}
                            label="End Date"
                            type="date"
                            elementProps={
                                {
                                defaultValue:toInputDate(typeof(props.tenure_end) === "string" ? new Date() : props.tenure_end),
                                } as InputHTMLAttributes<HTMLInputElement>
                            }
                            />}
                    </div>
                    <label className="flex items-center gap-2 text-black text-sm px-2 pb-3">
                        <input
                        type="checkbox"
                        checked={current}
                        onChange={() => setCurrent(!current)}
                        />
                        Currently Working
                    </label>
                </div>
                <GenericField id={props.user_id + "_title"} name={props.user_id + "_title"} label="Title" type="text" elementProps={{defaultValue: props.position}} ></GenericField>
                <GenericField id={props.user_id + "_desc"} name={props.user_id + "_desc"} label="Description" type="textarea" parentClassName="w-full" elementProps={{defaultValue: props.description, className: "h-14 resize-none overflow-y-auto"}}></GenericField>
                    <AdminOnly>
                        <SaveCancelOps id={props.user_id}></SaveCancelOps>
                    </AdminOnly>
            </div>
        </form>
    )
}
