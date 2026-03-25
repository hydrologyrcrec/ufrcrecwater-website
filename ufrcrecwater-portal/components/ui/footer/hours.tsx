import { footerInfo } from "@/data/footer";
import FooterHeading from "./footer-heading";

export default function Hours(){
    return (
        <div>
            <FooterHeading title="Working Hours"></FooterHeading>
            <div className="pt-2">
                <p className="text-lg font-medium">{footerInfo.openhours.days}</p>
                <p className="text-lg font-medium">{footerInfo.openhours.timings}</p>
            </div>
        </div>
    )
}