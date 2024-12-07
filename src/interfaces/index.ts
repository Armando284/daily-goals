export const moods = ['😁', '😐', '😭'] as const

export interface DayInfo{
  id: string
  mood: typeof moods[number]
  goals?: Array<Goal>
  date: string
}

export interface Goal{
  id: number
  description: string
  isDone: boolean
}