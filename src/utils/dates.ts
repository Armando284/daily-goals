export const dateStringToUTC = (date?: string) => date === undefined ? dateToUTC(new Date()) : dateToUTC(new Date(date))

export const dateToUTC = (date: Date) => date.toISOString().split("T")[0]

export const dateFromUTC = (date: string) => {
  const [year, month, day] = date.split("-").map(Number)
  return new Date(year, month - 1, day);
}