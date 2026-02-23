import React from "react"
import { ReactNode } from "react"

export type HtmlElementKey =
  | "text"
  | "password"
  | "email"
  | "number"
  | "textarea"
  | "checkbox"
  | "radio"
  | "select"
  | "file"
  | "date"
  | "range"
  | "color"

export type ElementFactory = (props?: any) => React.ReactNode

export const HTML_ELEMENT_FACTORY: Record<HtmlElementKey, ElementFactory> = {
  text: (props) => <input type="text" {...props} />,
  password: (props) => <input type="password" {...props} />,
  email: (props) => <input type="email" {...props} />,
  number: (props) => <input type="number" {...props} />,
  textarea: (props) => <textarea {...props} />,
  checkbox: (props) => <input type="checkbox" {...props} />,
  radio: (props) => <input type="radio" {...props} />,
  select: (props) => <select {...props}>{props.children}</select>,
  file: (props) => <input type="file" {...props} />,
  date: (props) => <input type="date" {...props} />,
  range: (props) => <input type="range" {...props} />,
  color: (props) => <input type="color" {...props} />,
}

export type GenericFieldProps = {
  label: string
  type: HtmlElementKey
  id?: string
  name?: string
  parentClassName?: string
  elementProps?: React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  children?: React.ReactNode
}

export type FieldLayoutProps = {
  label: string
  id?: string
  parentClassName?: string
  children: ReactNode
}