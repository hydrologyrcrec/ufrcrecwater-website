import { Pubdate } from "@/types/publications";

export function formatDateLong(date: Date): string {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  }

export default function DatePublished(props: Pubdate) {
    return (
        <p key={props.date_published.toISOString()}>{formatDateLong(props.date_published)}</p>
    )
}