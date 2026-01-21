import { Filter } from "@/types/general";
import { Logos, PublicationList } from "@/types/publications";

export const publicationsMockData: PublicationList = {
  publications: [
    {
      id: "nature-2021-alphafold-jumper",
      publication_title: "Highly accurate protein structure prediction with AlphaFold",
      date_published: new Date("2021-07-15"),
      publication_url: "https://www.nature.com/articles/s41586-021-03819-2",
      s3_url: "https://www.nature.com/articles/s41586-021-03819-2.pdf",
      authors: [
        { user_id: "john-jumper", user_name: "John Jumper" },
        { user_id: "richard-evans", user_name: "Richard Evans" },
        { user_id: "alexander-pritzel", user_name: "Alexander Pritzel" },
        { user_id: "tim-green", user_name: "Tim Green" },
        { user_id: "michael-figurnov", user_name: "Michael Figurnov" }
      ],
      journal_id: "xyz-abc",
      journal_name: "Nature",
      publication_desc:
        "This study introduces AlphaFold, a deep learning–based system developed by DeepMind that achieves unprecedented accuracy in predicting three-dimensional protein structures from amino acid sequences. By combining attention-based neural networks with evolutionary, physical, and geometric constraints, AlphaFold substantially outperformed all competing methods in the CASP14 protein structure prediction challenge. The work demonstrates that computational approaches can now rival experimental techniques such as X-ray crystallography and cryo-electron microscopy for many proteins. This breakthrough has far-reaching implications for structural biology, drug discovery, and understanding disease mechanisms, enabling rapid, large-scale structural insights that were previously impractical."
    },
    {
      id: "nature-2019-prime-editing-anzalone",
      publication_title: "Search-and-replace genome editing without double-strand breaks or donor DNA",
      date_published: new Date("2019-10-21"),
      publication_url: "https://www.nature.com/articles/s41586-019-1711-4",
      s3_url: "https://www.nature.com/articles/s41586-019-1711-4.pdf",
      authors: [
        { user_id: "andrew-v-anzalone", user_name: "Andrew V. Anzalone" },
        { user_id: "peyton-b-randolph", user_name: "Peyton B. Randolph" },
        { user_id: "jessie-r-davis", user_name: "Jessie R. Davis" },
        { user_id: "alexander-a-sousa", user_name: "Alexander A. Sousa" },
        { user_id: "luke-w-koblan", user_name: "Luke W. Koblan" }
      ],
      journal_id: "nature",
      journal_name: "Nature",
      publication_desc:
        "This paper presents prime editing, a novel genome editing technique that enables precise DNA sequence modifications without introducing double-strand breaks or requiring donor DNA templates. Prime editing combines a catalytically impaired Cas9 fused to a reverse transcriptase with a specialized guide RNA to directly write new genetic information into the target site. The method expands the range of possible edits, including insertions, deletions, and all twelve possible base substitutions, while reducing unwanted byproducts associated with traditional CRISPR-Cas9 editing. Prime editing represents a significant advance toward safer and more versatile genome engineering for research and potential therapeutic applications."
    },
    {
      id: "nature-2020-tabula-muris-senis-consortium",
      publication_title: "A single-cell transcriptomic atlas characterizes ageing tissues in the mouse",
      date_published: new Date("2020-07-15"),
      publication_url: "https://www.nature.com/articles/s41586-020-2496-1",
      s3_url: "https://www.nature.com/articles/s41586-020-2496-1.pdf",
      authors: [{ user_id: "tabula-muris-consortium", user_name: "The Tabula Muris Consortium" }],
      journal_id: "nature",
      journal_name: "Nature",
      publication_desc:
        "This work provides a comprehensive single-cell transcriptomic atlas of ageing across multiple mouse tissues using single-cell RNA sequencing. The study profiles hundreds of thousands of cells spanning different life stages, revealing how ageing affects gene expression, cell composition, and tissue-specific regulatory programs. The authors identify both shared and tissue-specific ageing signatures, including increased inflammatory signaling and altered cellular identities. By resolving ageing processes at single-cell resolution, this atlas offers a valuable resource for studying the biological mechanisms of ageing and age-related diseases, and establishes a foundation for comparative and translational ageing research."
    }
  ]};

export const logosList: Logos = {
    calendar: { src: '/publications/calendar.png', alt: 'Calendar Icon' },
    link: { src: '/publications/link.png', alt: 'Link Icon' },
    view: { src: '/publications/view.png', alt: 'View Icon' },
    download: { src: '/publications/download.png', alt: 'Download Icon' },
    journal: { src: '/publications/journal.png', alt: 'Journal Icon' },
    writing: { src: '/publications/writing.png', alt: 'Writing Icon' },
    menu: { src: '/publications/menu.png', alt: 'Menu Icon' },
    gradientmenu: { src: '/publications/gradient-menu.png', alt: 'Gradient Menu Icon' },
    ufifas: { src: '/uf-ifas-logo.jpg', alt: 'UF IFAS Logo' },
    close: { src: '/publications/close.png', alt: 'Close Icon' }
}

export const FilterCheckboxOptions : Filter = {
    options: [
       {id: "date", label: "Date", value: "Date", checked: false},
       {id: "research", label: "Research", value: "Research Name", checked: false},
       {id: "journal", label: "Journal", value: "Journal", checked: false},
       {id: "author", label: "Author", value: "Author", checked: false},
    ]
} 
