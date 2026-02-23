export function getMonthandYear(date: Date) {
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return `${month.slice(0, 3)} ${year}`;
}

export function toInputDate(date: Date) {
    return new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
    )
    .toISOString()
    .split("T")[0];
}