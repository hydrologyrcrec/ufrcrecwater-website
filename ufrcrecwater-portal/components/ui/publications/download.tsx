import { PubDownload } from "@/types/publications";

export default function DownloadPdf(props: PubDownload) {
    return (
        <a href={props.s3_url} download={props.filename}>{props.label}</a>
    );
}
  