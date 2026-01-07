import { SearchPlaceholder } from "@/types/general";

export default function Search(props: SearchPlaceholder) {
    return (
        <textarea name={props.label} id={props.label} placeholder={props.placeholder} className="w-11/12 h-7 placeholder:italic border text-xl font-medium text-center"></textarea>
    );
}