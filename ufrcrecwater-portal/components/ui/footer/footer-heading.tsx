import { Heading } from "@/types/footer";

export default function FooterHeading(props: Heading){
    return (
        <>
        <div className="inline-block">
            <h3 className="text-xl font-bold text-black">{props.title}</h3>
            <hr className="border-gray-600"/>
        </div>
        </>
    )
}