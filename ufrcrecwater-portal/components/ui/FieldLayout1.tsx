"use client"

import { FieldLayoutProps } from "./HtmlFactory1"

export function FieldLayout({ label, id, parentClassName, children }: FieldLayoutProps) {
  return (
    <div className={parentClassName + " relative h-fit px-2 pb-3"}>
      <label htmlFor={id} className="absolute -top-2 left-4 bg-[#302370] px-2 text-xs font-semibold text-white">{label}</label>
      <div className="rounded-md border-2 border-[#DB7E31] p-2 w-full">{children}</div>
    </div>
  )
}
