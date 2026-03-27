import { HeadlineType } from "@/types/home";
import PlayIcon from "./play-icon";

export default function Category(props: {title: HeadlineType}){
    const firstLetter = props.title.charAt(0).toUpperCase();
    const restOfTitle = props.title.slice(1);
    const headlineType = firstLetter + restOfTitle;
    return (
        <div className="p-4 absolute z-4 h-max w-full flex justify-start">
            <div className="flex w-max px-2 gap-2">
                <PlayIcon></PlayIcon>
                <h2 className="text-xl font-bold text-white">{headlineType}</h2>
            </div>
        </div>
    )
}