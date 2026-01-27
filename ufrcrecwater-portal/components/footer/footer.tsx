import { logosList } from "@/data/footer";
import SocialAccounts from "./socials";
import MiniNav from "./mini-nav";
import FooterHeading from "../ui/footer/footer-heading";
import Address from "./address";
import Contact from "./contact";
import Hours from "../ui/footer/hours";
import Copyright from "../ui/footer/copyright";

export default function Footer(){
    return (
        <div className="h-128 w-full mt-40 p-2 flex flex-col justify-center items-center gap-12 text-[#DB7E31] bg-[#302370]">
            <div className="flex justify-center gap-8">
                <div className="flex flex-col gap-2">
                    <FooterHeading title="Quick Links"></FooterHeading>
                    <MiniNav></MiniNav>
                </div>
                <div className="flex flex-col gap-4">
                    <Hours></Hours>
                    <Contact></Contact>
                    <Address></Address>
                </div>
                <div className="flex flex-col gap-4">
                    <FooterHeading title="Follow Us"></FooterHeading>
                    <SocialAccounts {...logosList}></SocialAccounts>
                </div>
            </div>
            <Copyright></Copyright>
        </div>
    )
}