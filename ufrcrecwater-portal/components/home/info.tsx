import { Slide } from "@/types/home";
import DateUpdatedAt from "../ui/home/date";
import SlideDescription from "../ui/home/description";
import HeadlineTitle from "../ui/home/title";

export default function Information(props: Slide){
    return (
        <div className="p-4 absolute bottom-0 left-0 right-0 z-4 h-2/5 w-full flex flex-col gap-4 overflow-scroll">
            <HeadlineTitle id={props.slide_info.id} title={props.slide_info.title}></HeadlineTitle>
            <DateUpdatedAt id={props.slide_info.id} updated_at= {new Date(props.slide_info.updated_at)}></DateUpdatedAt>
            <SlideDescription id={props.slide_info.id} description= {props.slide_info.description ?? ""}>
            </SlideDescription>
        </div>
    )
}