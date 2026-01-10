export type MemName = {
    id: string 
    name: string
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
    title: string
}

export type MemDesc = {
    id: string
    description: string
}

export type MemStatus = {
    id: string
    status: string
}

export type MemTenure = {
    id: string,
    start: Date,
    end: Date | "Present"
}

export type Member = {
    id: string,
    name: string,
    title: string,
    start: Date,
    end: Date | "Present",
    status: string,
    description: string,
    imageUrl: string
}

export type MembersList = {
    members: Member[]
}

export type Icon = {
    src: string,
    alt: string
}

export type Logos = {
    active: Icon,
    former: Icon
}