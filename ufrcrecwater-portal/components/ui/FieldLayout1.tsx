"use client"

import { FieldLayoutProps } from "./HtmlFactory1"

export function FieldLayout({ label, id, parentClassName, children }: FieldLayoutProps) {
  return (
    <div className={parentClassName + " relative h-fit px-2 pb-3"}>
      <label htmlFor={id} className="absolute -top-2 left-4 bg-gray-600 px-2 text-xs font-semibold text-black">{label}</label>
      <div className="rounded-md border-2 border-white p-2 w-full">{children}</div>
    </div>
  )
}
