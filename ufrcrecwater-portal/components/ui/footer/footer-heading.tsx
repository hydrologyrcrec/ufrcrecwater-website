import { Heading } from "@/types/footer";

export default function FooterHeading(props: Heading){
    return (
        <h3 className="text-xl font-bold text-white">{props.title}</h3>
    )
}