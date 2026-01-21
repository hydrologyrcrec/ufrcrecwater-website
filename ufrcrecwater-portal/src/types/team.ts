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
}

export type MemDesc = {
    id: string
    description: string
}

export type MemStatus = {
    id: string
    userStatus: string
}

export type MemTenure = {
    id: string,
    tenureStart: Date,
    tenureEnd: Date | "Present"
}

export type Member = {
    user_id: string,
    user_name: string,
    position: string,
    tenure_start: Date,
    tenure_end: Date | "Present",
    status: string,
    description: string,
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
    former: Icon
}