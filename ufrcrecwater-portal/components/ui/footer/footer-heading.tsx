import { Heading } from "@/types/footer";

export default function FooterHeading(props: Heading){
    return (
        <>
        <h3 className="text-xl font-bold text-black">{props.title}<hr className="border-gray-600"/></h3>
        </>
    )
}