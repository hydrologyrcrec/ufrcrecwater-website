import { footerInfo } from "@/data/footer";
import FooterHeading from "./footer-heading";

export default function Hours(){
    return (
        <div className="px-4">
            <FooterHeading title="Working Hours"></FooterHeading>
            <div className="px-2 pt-2">
                <p className="text-lg font-normal">{footerInfo.openhours.days}</p>
                <p className="text-lg font-normal">{footerInfo.openhours.timings}</p>
            </div>
        </div>
    )
}