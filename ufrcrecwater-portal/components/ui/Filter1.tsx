'use client'

import { useState } from "react";
import { Checkbox } from "./Checkbox1";
import { Filter } from "@/types/general";
import { logosList } from "@/data/general";
import Action from "./DataOps1";
import AdminOnly from "./AdminOnly1";

export default function FilterSort(props: Filter) {
  const [options, setOptions] = useState(props.options);

  return (
    <div className="w-11/12 flex gap-2 ">
        <p className="pr-4 whitespace-nowrap">Sort by: </p>
        <div className="w-11/12 flex flex-wrap justify-start gap-2">
            {options.map((option) => (
                <Checkbox
                key={option.id}
                option={option}
                onChange={(id, checked) => {
                    // WHY: update only the toggled option, keep others unchanged
                    setOptions((prev) =>
                    prev.map((opt) =>
                        opt.id === id ? { ...opt, checked } : opt
                    )
                    );
                }}
                />
            ))}
            <button className="italic underline text-blue-500 cursor-pointer whitespace-nowrap text-lg pl-4" onClick={() => setOptions(props.options)}>Clear All</button>
        </div>
        {/* <AdminOnly>
            <div className="xl:flex xl:justify-end xl:gap-2 hidden">
                <Action {...logosList.Add} cardId=""></Action>
            </div>
        </AdminOnly> */}
    </div>
  );
}
