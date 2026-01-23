export type ResTitle = {
    id: string
    research_title: string
}

export type ResDesc = {
    id: string
    research_desc: string
}

export type ResPic = {
    id: string
    imageUrl: string
    alt: string
    height: number
    width: number
}

export type Research = {
    id: string
    research_title: string
    research_desc: string
    s3_url: string
}

export type ResearchList = {
    research: Research []
}