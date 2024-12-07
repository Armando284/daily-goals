import type { DayInfo } from "../../interfaces";

// const parseDate = (date: Date) => {
//   const [day, month, year] = [date.getDate(), date.getMonth() + 1, date.getFullYear()]
//   const today = new Date()
//   const [tDay, tMonth, tYear] = [today.getDate(), today.getMonth() + 1, today.getFullYear()]
//   if (day === tDay && month === tMonth && year === tYear) return 'Today'
//   if (day === tDay - 1 && month === tMonth && year === tYear) return 'Yesterday'
//   return `${day}-${month}-${year}`
// }

export default function Day({ day }: { day: DayInfo }) {
  return <section className="aspect-square p-4 flex flex-col items-center justify-between border border-slate-300 rounded">
    <header>
      <h3 className="text-2xl text-slate-900 font-bold">{day.date}</h3>
    </header>
    <ul className="w-full h-min list-disc list-inside text-slate-700">
      {day.goals?.map((goal) => <li className="space-x-1" key={goal.id}>
        <span>{goal.description}</span>
        <span>{goal.isDone ? '✔' : '❌'}</span>
      </li>)}
    </ul>
    <footer>
      <span className="text-4xl">{day.mood}</span>
    </footer>
  </section>
}