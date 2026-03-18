"use client"

import { useEffect } from "react";
import { useInstrumentStore } from "@/store/instrumentationStore";
import InstrumentCard from "./card";
import { Instrument, InstrumentList } from "@/types/instrument";
import InstrumentPageSubject from "../ui/instrumentation/PageSubject";

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
    <div className="p-5 flex flex-col w-full justify-center gap-6 font-bold">
       {/* <InstrumentPageSubject></InstrumentPageSubject> */}
      <div className="flex flex-col gap-6 items-center justify-center">
        {props.instruments.map((instrument: Instrument) => (
          <InstrumentCard key={instrument.id + "_card"} {...instrument} />
        ))}
      </div>
    </div>
  );
}