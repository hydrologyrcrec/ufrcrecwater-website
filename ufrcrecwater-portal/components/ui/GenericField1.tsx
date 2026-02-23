import { FieldLayout } from "./FieldLayout1"
import { HTML_ELEMENT_FACTORY } from "./HtmlFactory1"
import { GenericFieldProps } from "./HtmlFactory1"

export function GenericField({
  label,
  type,
  id,
  name,
  parentClassName,
  elementProps = {},
  children,
}: GenericFieldProps) {
  const Element = HTML_ELEMENT_FACTORY[type]
  return (
    <FieldLayout label={label} id={id} parentClassName={parentClassName}>
      {Element({
        id,
        name,
        ...elementProps,
        className:
        `w-full bg-transparent outline-none text-sm whitespace-pre-wrap break-words text-white ${elementProps?.className}`,
        children
      })}
    </FieldLayout>
  )
}
