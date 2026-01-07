import { Authors } from "@/types/publications";

export default function AuthorsList( props: Authors) {
    return (
        <div className="w-full flex flex-wrap text-sm">
            {props.authors.map((author, idx) => (
                <span key={author.id} className="italic text-[#DB7E31] whitespace-nowrap inline-block cursor-pointer"> {author.name}{idx < props.authors.length - 1 ? ",\u00A0" : '.'} </span>
            ))}
        </div>
    );
}