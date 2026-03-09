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
    date_uninstalled: Date | "current"
}

export type InsPic = {
    id: string
    imageUrl: string
    alt: string
    height: number
    width: number
}

export type Tool = {
    id: string
    tool_title: string
    tool_desc: string
    s3_url: string
}

export type ToolList = {
    hasTools: boolean
    isDataFetched : boolean
    tools: Tool []
    currentIndex: number
}

export type ArrowNavigatorProps = {
    logo: Icon;
    direction: 'left' | 'right'
    toolsFetchRequired: boolean
    instrument_id: string
}

export type InstrumentTools = Map<string, ToolList>

export type Instrument = {
    id: string
    instrument_title: string
    instrument_desc: string
    date_installed: Date
    date_uninstalled: Date | "current"
    hasTools: boolean
    s3_url: string
}

export type InstrumentList = {
    instruments: Instrument []
}

export type LogoKey = 'left-arrow' | 'right-arrow' | 'left-blocked-arrow' | 'right-blocked-arrow'

export type Icon = {
  src: string;
  alt: string;
}

export type Logos = Record<LogoKey, Icon>