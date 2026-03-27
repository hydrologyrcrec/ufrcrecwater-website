import Image from "next/image";

export default function WebsiteBackground() {
    return (
        <div className="fixed inset-0 -z-10">
            <Image src="/bg-wallpaper1.jpg" alt="Website Background Wallpaper" fill 
            className="object-cover w-full h-full opacity-90">
            </Image>
            {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div> */}
        </div>
    )
}