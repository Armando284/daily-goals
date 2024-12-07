import './App.css'
import Days from './components/days/Days'
import NewDay from './components/new_day/NewDay'
import type { DayInfo } from "./interfaces"
import { useState } from 'react'
import { dateStringToUTC } from './utils'

const daysData: Array<DayInfo> = [
  {
    id: crypto.randomUUID(),
    mood: '😁',
    // goals: [{ id: 0, description: 'hola', isDone: false }],
    date: dateStringToUTC('12/4/2024')
  },
  {
    id: crypto.randomUUID(),
    mood: '😐',
    // goals: [{ id: 0, description: 'hola', isDone: false }],
    date: dateStringToUTC('12/5/2024')
  },
  {
    id: crypto.randomUUID(),
    mood: '😭',
    // goals: [{ id: 0, description: 'hola', isDone: false }],
    date: dateStringToUTC()
  },
]

function App() {
  const [days, setDays] = useState(daysData)

  const addDay = (newDay: DayInfo) => {
    setDays(oldDays => [...oldDays, newDay])
  }
  return (
    <main className='w-full max-w-screen-xl min-h-dvh p-8 mx-auto flex flex-col justify-start items-center'>
      <header className='w-full p-16 bg-slate-100 rounded-md flex justify-center'>
        <h1 className='text-6xl xl:text-9xl font-semibold '>Daily Goals</h1>
      </header>
      <NewDay addDay={addDay} />
      <Days days={days} />
    </main>
  )
}

export default App
