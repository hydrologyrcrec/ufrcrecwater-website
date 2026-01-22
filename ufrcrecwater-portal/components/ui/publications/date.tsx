import { Pubdate } from "@/types/publications";

export function formatDateLong(date: Date): string {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  }

export default function DatePublished(props: Pubdate) {
    const date = new Date(props.date_published);
    return (
        <p key={date.toISOString()}>{formatDateLong(date)}</p>
    )
}