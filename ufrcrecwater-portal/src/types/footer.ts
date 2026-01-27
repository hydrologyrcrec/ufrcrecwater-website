export type Icon = {
    src: string,
    alt: string,
    link: string
}

export type SocialMediaTypes = "linkedin" | "instagram" | "facebook" | "youtube" | "x";

export type Logos = Record<SocialMediaTypes, Icon>

export type Heading = {
    title: string
}