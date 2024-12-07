import { DayInfo, moods } from "../../interfaces";
import { FormEvent, ChangeEvent, useState } from "react";

export default function NewDay({ addDay }: { addDay: (day: DayInfo) => void }) {
  const [newDay, setNewDay] = useState<DayInfo>({
    id: '',
    mood: moods[1],
    goals: [],
    date: new Date().toISOString().split("T")[0]
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    console.log({ name, value })
    setNewDay((prevValue) => ({
      ...prevValue,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('submit');
    setNewDay(prevValue => ({ ...prevValue, id: crypto.randomUUID() }))

    addDay(newDay)
  }

  return <article className="flex flex-col gap-4 my-4">
    <h1 className="text-4xl">New Day</h1>
    <form onSubmit={handleSubmit}>
      <select name="mood" onChange={handleChange} defaultValue={newDay.mood}>
        {moods.map((mood, i) => <option key={i} value={mood} >{mood}</option>)}
      </select>
      {/* <input type="text" name="" id="" placeholder="goals" /> */}
      <input type="date" name="date" placeholder="date" value={newDay.date} onChange={handleChange} />
      <input type="submit" value="Add" className="px-2 py-1 border border-slate-700 rounded-md" />
    </form>
  </article>
}