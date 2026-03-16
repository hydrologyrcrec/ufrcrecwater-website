import PubAuthorsList from "../ui/publications/authors"
import PubDatePublished from "../ui/publications/date"
import PubDownloadPdf from "../ui/publications/download"
import PubExternalLink from "../ui/publications/link"
import PubViewPdf from "../ui/publications/view"
import PublicationElement from "./element"
import PubJournalName from "../ui/publications/journal"
import { logosList } from "@/data/publications"
import { Publication } from "@/types/publications"
import PublicationTitle from "../ui/publications/title"
import PubDescription from "../ui/publications/description"
import PubThumbnail from "../ui/publications/publication-thumbnail"

export default function PublicationCard(props: Publication) {
    return (
        <div className="h-128 w-full flex items-start justify-start gap-4 rounded-2xl bg-gray-600 shadow-gray-600 shadow-lg overflow-hidden">
            <div className="h-full flex items-center justify-start shrink-0">
                <PubThumbnail
                    id={props.id + "_image"}
                    imageUrl={`https://ufrcrecwater-assets.s3.us-east-1.amazonaws.com/public/Publications/thumbnails/${props.id}.jpg`}
                    height={500}
                    width={500}
                    alt={props.id + "_picture"}
                />
            </div>
            <div
                key={props.id}
                className="w-max p-2 flex flex-col gap-1 justify-start rounded-2xl bg-gray-600"
            >
                <PublicationTitle id={props.id} publication_title={props.publication_title}></PublicationTitle>
                <div className="flex justify-between text-sm text-white">
                    <PublicationElement id="PublicationDate" component={<><PubDatePublished date_published={props.date_published}></PubDatePublished></>} img={logosList.calendar}></PublicationElement>
                    <PublicationElement id="PublicationLink" component={<><PubExternalLink publication_url={props.publication_url} label="Publication"></PubExternalLink></>} img={logosList.link}></PublicationElement>
                    <PublicationElement id="ViewPublication" component={<><PubViewPdf s3_url={props.s3_url} label="View"></PubViewPdf></>} img={logosList.view}></PublicationElement>
                    <PublicationElement id="DownloadPublication" component={<><PubDownloadPdf s3_url={props.s3_url} label="Download" filename={props.publication_title}></PubDownloadPdf></>} img={logosList.download}></PublicationElement>
                </div>
                <div className="pr-2 flex flex-col gap-2 text-white">
                    <PublicationElement id="AuthorsList" component={<PubAuthorsList authors={props.authors}></PubAuthorsList>} img={logosList.writing}></PublicationElement>
                    <PublicationElement id="Journal" component={<PubJournalName journal_name={props.journal_name} journal_url={props.journal_url}></PubJournalName>} img={logosList.journal}></PublicationElement>
                    <PubDescription id={props.id} publication_desc={props.publication_desc}></PubDescription>
                </div>
            </div>
        </div>
    )
}
