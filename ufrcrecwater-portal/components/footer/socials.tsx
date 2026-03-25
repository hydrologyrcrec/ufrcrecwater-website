import { Logos } from "@/types/footer";
import SocMed from "../ui/footer/icon";
import FooterHeading from "../ui/footer/footer-heading";

export default function SocialAccounts(props: Logos){
    return (
        <div className="w-max flex flex-col justify-start gap-4">
            <FooterHeading title="Follow Us"></FooterHeading>
            {Object.keys(props).map((key) => (
            <SocMed key={key} {...props[key as keyof Logos]} />
            ))}
        </div>
    )
}