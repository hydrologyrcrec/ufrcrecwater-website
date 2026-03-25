import { footerInfo } from "@/data/footer";
import FooterHeading from "../ui/footer/footer-heading";
import Link from "next/link";

export default function Address(){
    return (
        <div>
            <FooterHeading title="Address"></FooterHeading>
            <div className="pt-2">
                <Link href={footerInfo.address.link}>
                    <p className="text-lg font-medium">{footerInfo.address.line1}</p>
                    <p className="text-lg font-medium">{footerInfo.address.line2}</p>
                    <p className="text-lg font-medium">{footerInfo.address.line3}</p>
                </Link>
            </div>
        </div>
    )
}