import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";
import InstrumentHistory from "../../../components/instrumentation/instrumentation-list";
import { InstrumentList } from "@/types/instrument";
import { baseURL } from "@/data/constants";

export const metadata: Metadata = {
  title: PAGES.instrumentation.title,
  description: PAGES.instrumentation.description,
};

async function getInstruments(): Promise<InstrumentList> {
  const res = (await fetch(`${baseURL}/instruments`, { cache: "no-store" }))
  return res.json();
}

export default async function InstrumentationPage() {
  const data = await getInstruments();
  return <InstrumentHistory instruments={data.instruments} />
}