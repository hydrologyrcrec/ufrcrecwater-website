import { PageKey } from "./state"

export type MemName = {
    id: string 
    userName: string
}

export type MemPic = {
    id: string
    imageUrl: string
    alt: string
    height: number
    width: number
}

export type MemTitle = {
    id: string
    position: string
    status: Date | "current"
}

export type MemDesc = {
    id: string
    description: string
    status: Date | "current"
}

export type MemStatus = {
    id: string
    status: Date | "current" 
}

export type MemTenure = {
    id: string,
    tenureStart: Date,
    tenureEnd: Date | "current"
}

export type Member = {
    user_id: string,
    user_name: string,
    position: string,
    tenure_start: Date,
    tenure_end: Date | "current",
    description: string,
    s3_url: string
}

export type MembersList = {
    members: Member[]
}

export type Icon = {
    src: string,
    alt: string
}

export type Logos = {
    current: Icon,
    former: Icon,
    calendar: Icon
}

export type UserOnClick = {
    page: PageKey,
    cardId: string,
    label: string
}