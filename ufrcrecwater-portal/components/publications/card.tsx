import AuthorsList from "../ui/publications/authors"
import DatePublished from "../ui/publications/date"
import DownloadPdf from "../ui/publications/download"
import ExternalLink from "../ui/publications/link"
import ViewPdf from "../ui/publications/view"
import PublicationElement from "./element"
import JournalName from "../ui/publications/journal"
import { logosList } from "@/data/publications"
import { Publication } from "@/types/publications"

export default function PublicationCard(props: Publication) {
    return (
        <div key={props.id} className="w-lg h-72 p-3 flex flex-col justify-start bg-[#302370] rounded-2xl overflow-clip">
            <h2 className="text-xl text-[#DB7E31]">{props.title}</h2>
            <div className="flex items-center gap-6 text-sm text-white">
                <PublicationElement id="PublicationDate" component={<><DatePublished date={props.date}></DatePublished></>} img={logosList.calendar}></PublicationElement>
                <PublicationElement id="PublicationLink" component={<><ExternalLink url={props.url} label="Publication"></ExternalLink></>} img={logosList.link}></PublicationElement>
                <PublicationElement id="ViewPublication" component={<><ViewPdf url={props.url} label="View"></ViewPdf></>} img={logosList.view}></PublicationElement>
                <PublicationElement id="DownloadPublication" component={<><DownloadPdf url={props.url} label="Download" filename={props.title}></DownloadPdf></>} img={logosList.download}></PublicationElement>
            </div>
            <PublicationElement id="AuthorsList" component={<AuthorsList authors={props.authors}></AuthorsList>} img={logosList.writing}></PublicationElement>
            <PublicationElement id="Journal" component={<JournalName name={props.journal}></JournalName>} img={logosList.journal}></PublicationElement>
            <p className="text-sm text-[#808080] overflow-scroll">{props.descripton}</p>
        </div>  
    )
}