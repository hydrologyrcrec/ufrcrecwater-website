import { Authors } from "@/types/publications";

export default function PubAuthorsList( props: Authors) {
    return (
        <div className="w-full flex flex-wrap text-sm">
            {props.authors.map((author, idx) => (
                <span key={author.user_id} className="italic whitespace-nowrap inline-block cursor-pointer"> {author.user_name}{idx < props.authors.length - 1 ? ",\u00A0" : '.'} </span>
            ))}
        </div>
    );
}