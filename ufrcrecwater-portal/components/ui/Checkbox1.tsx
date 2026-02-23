import type { CheckboxFilterOption, CheckboxProps } from "@/types/general";

/**
 * Checkbox
 * WHY:
 * - Controlled component (single source of truth)
 * - `id` used for state updates, not label/value
 * - Accessible via label + htmlFor
 */
export function Checkbox({ option, onChange }: CheckboxProps) {
  return (
    <label htmlFor={option.id} className="flex items-center gap-2 cursor-pointer select-none">
      <input
        id={option.id}
        type="checkbox"
        checked={option.checked}
        onChange={(e) => onChange(option.id, e.target.checked)}
        className="h-4 w-4 accent-blue-600"
      />
      <span className="text-lg font-light">{option.label}</span>
    </label>
  );
}
