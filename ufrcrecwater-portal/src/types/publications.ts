export type Pubdate = {
    date: Date;
}

export type PubLink = {
    url: string
    label: string
}

export type PubView = {
    url: string;
    label: string;
};

export type PubDownload = {
    url: string;
    filename: string;
    label: string;
};

export type Author = {
    id: string;
    name: string;
};

export type Authors = {
    authors: Author[];
};

export type Journal = {
    name: string;
}

export type Publication = {
    id: string
    title: string
    date: Date
    url: string
    authors: Author []
    journal: string
    descripton: string
}

export type PublicationList = {
    publications: Publication[]
}

export type Icon = {
    src: string,
    alt: string
}

export type Logos = {
    calendar: Icon,
    link: Icon,
    view: Icon,
    download: Icon,
    journal: Icon,
    writing: Icon,
    menu: Icon,
    gradientmenu: Icon,
    ufifas: Icon,
    close: Icon
}

export type Element = {
    id: string,
    img: Icon,
    component: React.ReactElement
}