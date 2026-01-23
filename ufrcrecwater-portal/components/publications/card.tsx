import AuthorsList from "../ui/publications/authors"
import DatePublished from "../ui/publications/date"
import DownloadPdf from "../ui/publications/download"
import ExternalLink from "../ui/publications/link"
import ViewPdf from "../ui/publications/view"
import PublicationElement from "./element"
import JournalName from "../ui/publications/journal"
import { logosList } from "@/data/publications"
import { Publication } from "@/types/publications"
import PublicationTitle from "../ui/publications/title"
import PublicationDescription from "../ui/publications/description"
import Thumbnail from "../ui/publications/publication-thumbnail"

export default function PublicationCard(props: Publication) {
    return (
        <div className="h-128 w-full max-w-5xl flex items-stretch justify-between rounded-2xl bg-[#302370] shadow-gray-600 shadow-lg overflow-hidden">
            <div className="h-full w-2/5 flex items-center justify-start shrink-0">
                <Thumbnail
                    id={props.id + "_image"}
                    imageUrl={`https://ufrcrecwater-assets.s3.us-east-1.amazonaws.com/public/thumbnails/${props.id}.jpg`}
                    height={500}
                    width={500}
                    alt={props.id + "_picture"}
                />
            </div>
            <div
                key={props.id}
                className="w-3/5 p-2 flex flex-col gap-1 justify-start rounded-2xl bg-[#302370] overflow-hidden"
            >
                <PublicationTitle id={props.id} publication_title={props.publication_title}></PublicationTitle>
                <div className="flex justify-between text-sm text-white">
                    <PublicationElement id="PublicationDate" component={<><DatePublished date_published={props.date_published}></DatePublished></>} img={logosList.calendar}></PublicationElement>
                    <PublicationElement id="PublicationLink" component={<><ExternalLink publication_url={props.publication_url} label="Publication"></ExternalLink></>} img={logosList.link}></PublicationElement>
                    <PublicationElement id="ViewPublication" component={<><ViewPdf s3_url={props.s3_url} label="View"></ViewPdf></>} img={logosList.view}></PublicationElement>
                    <PublicationElement id="DownloadPublication" component={<><DownloadPdf s3_url={props.s3_url} label="Download" filename={props.publication_title}></DownloadPdf></>} img={logosList.download}></PublicationElement>
                </div>
                <div className="pr-2 flex flex-col gap-2 text-white overflow-y-auto">
                    <PublicationElement id="AuthorsList" component={<AuthorsList authors={props.authors}></AuthorsList>} img={logosList.writing}></PublicationElement>
                    <PublicationElement id="Journal" component={<JournalName journal_name={props.journal_name} journal_url={props.journal_url}></JournalName>} img={logosList.journal}></PublicationElement>
                    <PublicationDescription id={props.id} publication_desc={props.publication_desc}></PublicationDescription>
                </div>
            </div>
        </div>
    )
}
