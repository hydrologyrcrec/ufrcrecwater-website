import { footerInfo } from "@/data/footer";
import FooterHeading from "../ui/footer/footer-heading";
import Link from "next/link";

export default function Contact(){
    return (
        <div className="px-4">
            <FooterHeading title="Contact"></FooterHeading>
            <div className="px-2 pt-2">
                <Link href={`mailto:${footerInfo.contact.email}`} className="text-lg font-normal">{footerInfo.contact.email}</Link>
                <p className="text-lg font-normal">{footerInfo.contact.phone}</p>
            </div>
        </div>
    )
}