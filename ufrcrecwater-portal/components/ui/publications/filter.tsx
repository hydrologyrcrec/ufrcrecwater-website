'use client'

import { useState } from "react";
import { FilterCheckboxOptions } from "@/data/publications";
import { Checkbox } from "../checkbox";

export default function Filter() {
  const [options, setOptions] = useState(FilterCheckboxOptions.options);

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
        </div>
        <div className="flex justify-end">
            <button className="italic underline text-blue-500 cursor-pointer whitespace-nowrap" onClick={() => setOptions(FilterCheckboxOptions.options)}>Clear All</button>
        </div>
    </div>
  );
}
