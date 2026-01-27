import { footerInfo } from "@/data/footer";
import FooterHeading from "../ui/footer/footer-heading";
import Link from "next/link";

export default function Address(){
    return (
        <div className="px-4">
            <FooterHeading title="Address"></FooterHeading>
            <div className="px-2 pt-2">
                <Link href={footerInfo.address.link}>
                    <p className="text-lg font-normal">{footerInfo.address.line1}</p>
                    <p className="text-lg font-normal">{footerInfo.address.line2}</p>
                    <p className="text-lg font-normal">{footerInfo.address.line3}</p>
                </Link>
            </div>
        </div>
    )
}