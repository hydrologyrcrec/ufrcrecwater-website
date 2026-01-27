export type InsTitle = {
    id: string
    instrument_title: string
}

export type InsDesc = {
    id: string
    instrument_desc: string
}

export type InsDate = {
    date_installed: Date
}

export type InsPic = {
    id: string
    imageUrl: string
    alt: string
    height: number
    width: number
}

export type Instrument = {
    id: string
    instrument_title: string
    instrument_desc: string
    s3_url: string
    date_installed: Date
}

export type InstrumentList = {
    instruments: Instrument []
}