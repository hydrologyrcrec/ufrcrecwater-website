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
        <div className="md:h-128 max-w-250 flex flex-col w-84 h-200 md:w-180 lg:w-250 md:flex-row md:items-stretch md:justify-start rounded-2xl bg-[#D9E2EC] shadow-gray-600 shadow-xl">
            <div className="md:h-full md:w-100 h-96 flex items-center md:justify-start shrink-0 overflow-hidden md:rounded-l-2xl md:rounded-t-none rounded-t-2xl">
                <PubThumbnail
                    id={props.id + "_image"}
                    imageUrl={`https://ufrcrecwater-assets.s3.us-east-1.amazonaws.com/public/Publications/thumbnails/${props.id}.jpg`}
                    height={500}
                    width={500}
                    alt={props.id + "_picture"}
                    publication_url={props.publication_url}
                />
            </div>
            <div
                key={props.id}
                className="p-4 flex flex-1 flex-col gap-1 justify-start backdrop-blur-3xl min-h-0 md:rounded-r-2xl md:rounded-l-none rounded-b-2xl"
            >
                <PublicationTitle id={props.id} publication_title={props.publication_title}></PublicationTitle>
                <div className="flex justify-between text-sm text-black">
                    <PublicationElement id="PublicationDate" component={<><PubDatePublished date_published={props.date_published}></PubDatePublished></>} img={logosList.calendar}></PublicationElement>
                    <PublicationElement id="PublicationLink" css="hidden" component={<><PubExternalLink publication_url={props.publication_url} label="Publication"></PubExternalLink></>} img={logosList.link}></PublicationElement>
                    <PublicationElement id="ViewPublication" css="hidden" component={<><PubViewPdf s3_url={props.s3_url} label="View"></PubViewPdf></>} img={logosList.view}></PublicationElement>
                    <PublicationElement id="DownloadPublication" css="hidden" component={<><PubDownloadPdf s3_url={props.s3_url} label="Download" filename={props.publication_title}></PubDownloadPdf></>} img={logosList.download}></PublicationElement>
                </div>
                <div className="flex flex-1 flex-col gap-2 text-black min-h-0">
                    <PublicationElement  id="AuthorsList" css="hidden" component={<PubAuthorsList authors={props.authors}></PubAuthorsList>} img={logosList.writing}></PublicationElement>
                    <PublicationElement id="Journal" component={<PubJournalName journal_name={props.journal_name} journal_url={props.journal_url}></PubJournalName>} img={logosList.journal}></PublicationElement>
                    <PubDescription id={props.id} publication_desc={props.publication_desc}></PubDescription>
                </div>
            </div>
        </div>
    )
}
