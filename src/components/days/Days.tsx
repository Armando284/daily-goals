import { DayInfo } from "../../interfaces"
import Day from "../day/Day"



export default function Days({ days }: { days: Array<DayInfo> }) {
  return <article className="grid grid-cols-2 md:grid-cols-4  xl:grid-cols-6 gap-2">
    {days.map(day => <Day day={day} key={day.id} />)}
  </article>
}