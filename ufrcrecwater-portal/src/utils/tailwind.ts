// src/lib/tw.ts

export function bp(prefix: string, ...classes: string[]) {
    return classes.map(c => `${prefix}:${c}`).join(" ")
}

export function cn(...classes: (string | undefined | false)[]) {
    return classes.filter(Boolean).join(" ")
}

export const tw = {
    lg: (...c: string[]) => bp("lg", ...c),
    md: (...c: string[]) => bp("md", ...c),
    sm: (...c: string[]) => bp("sm", ...c),
    xl: (...c: string[]) => bp("xl", ...c),
    _2xl: (...c: string[]) => bp("2xl", ...c),
}