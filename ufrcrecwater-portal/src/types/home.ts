export type Icon = {
    src: string;
    alt: string;
}

export type SlideState = {
    currentSlide: number
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
    listLength: number
}

export type ArrowNavigatorProps = {
    logo: Icon;
    slideCurrState: SlideState
    direction: 'left' | 'right'
}

export type LogoKey = 'large-left-slider-white' | 'large-right-slider-white'

export type Logos = Record<LogoKey, Icon>

export type NavigatorProps = {"logos": Logos, "currentSlide": number, "setCurrentSlide": React.Dispatch<React.SetStateAction<number>>, "listLength": number};

export type Description = {
    id: string
    description: string
}

export type Title = {
    id: string
    title: string
}

export type UpdatedDate = {
    id: string
    updated_at: Date
}

export type BgImg = {
    id: string
    s3_url: string
}

export type HeadlineType =
  | "home"
  | "research"
  | "publications"
  | "facilities"
  | "instrumentation"
  | "news"
  | "conferences"
  | "applications"
  | "gallery";

export type SlideInfo = {
    id: string;
    s3_url: string;
    title: string;
    description?: string;
    updated_at: Date;
    extra?: any;
}

export type Slide = {
    slide_info: SlideInfo;
    headline_type: HeadlineType;
    recent: boolean;
}

export type Slides = Slide[]