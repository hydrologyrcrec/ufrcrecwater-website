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
        <div className="mt-20 h-max w-full flex flex-col justify-center items-center text-black bg-[#FBF0E9] border border-t-red-300/50 border-x-0 border-b-0">
            <div className="p-10 flex flex-col justify-center items-center w-full h-full backdrop-blur-3xl gap-12">
                <div className="flex md:flex-row flex-col justify-center md:gap-8 gap-4">
                    <div className="flex flex-col gap-4">
                        <MiniNav></MiniNav>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Hours></Hours>
                        <Contact></Contact>
                        <Address></Address>
                    </div>
                    <div className="flex">
                        <SocialAccounts {...logosList}></SocialAccounts>
                    </div>
                </div>
                <Copyright></Copyright>
            </div>
        </div>
    )
}