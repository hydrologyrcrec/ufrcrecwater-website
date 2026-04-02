"use client"

import { useEffect } from "react";
import { useInstrumentStore } from "@/store/instrumentationStore";
import InstrumentCard from "./card";
import { Instrument, InstrumentList } from "@/types/instrument";
import InstrumentOverview from "../ui/instrumentation/Instrumentation-Overview";

export default function InstrumentHistory(props: InstrumentList) {
  const { setInitialData } = useInstrumentStore();

  useEffect(() => {
    const instrumentData = props.instruments.map((instrument: Instrument) => ({
        instrument_id: instrument.id,
        hasTools: instrument.hasTools,
      }))
    setInitialData(instrumentData);
  }, [props.instruments, setInitialData]);

  return (
    <div className="relative xl:top-30 top-5 p-5 flex flex-col w-full justify-center gap-6 font-bold">
       <InstrumentOverview></InstrumentOverview>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,400px))]
                sm:grid-cols-[minmax(300px,400px)_minmax(300px,400px)]
                xl:grid-cols-[minmax(300px,400px)_minmax(300px,400px)_minmax(300px,400px)_minmax(300px,400px)] gap-8 justify-center">
        {props.instruments.map((instrument: Instrument) => (
          <InstrumentCard key={instrument.id + "_card"} {...instrument} />
        ))}
      </div>
    </div>
  );
}