import { Logos } from "@/types/footer";
import SocMed from "../ui/footer/icon";

export default function SocialAccounts(props: Logos){
    return (
        <div className="w-max px-2 flex flex-col justify-start gap-8">
            {Object.keys(props).map((key) => (
            <SocMed key={key} {...props[key as keyof Logos]} />
            ))}
        </div>
    )
}