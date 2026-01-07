import { PubView } from "@/types/publications";

export default function ViewPdf(props: PubView) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">{props.label}</a>
  );
}
