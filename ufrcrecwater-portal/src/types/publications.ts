export type PubTitle = {
    id: string
    publication_title: string
}

export type Pubdate = {
    date_published: Date;
}

export type PubLink = {
    publication_url: string
    label: string
}

export type PubView = {
    s3_url: string;
    label: string;
};

export type PubDownload = {
    s3_url: string;
    filename: string;
    label: string;
};

export type PubDesc = {
    id: string;
    publication_desc: string;
}

export type PubTnail = {
    id: string
    imageUrl: string
    alt: string
    height: number
    width: number
}

export type Author = {
    user_id: string;
    user_name: string;
};

export type Authors = {
    authors: Author[];
};

export type Journal = {
    journal_name: string;
    journal_url: string
}

export type Publication = {
    id: string
    journal_id: String
    journal_name: string
    journal_url: string
    publication_title: string
    publication_url: string
    publication_desc: string
    s3_url: string
    date_published: Date
    authors: Author []
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
    purplemenu: Icon,
    ufifas: Icon,
    close: Icon
}

export type Element = {
    id: string,
    img: Icon,
    component: React.ReactElement
}