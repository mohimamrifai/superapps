import React from 'react'
import { Calendar, Clock4 } from 'lucide-react'
import Day from './Day'
import Month from './Month'
import dynamic from 'next/dynamic'

const Time = dynamic(() => import('./Time'), { ssr: false })

export default function Header() {
  return (
    <div className='mb-3 py-2 border-b-2 flex items-center gap-2'>
        <div className='flex items-center gap-1 text-blue-600 text-xs'>
            <Calendar size={15} />
            <span>{<Day />} {<Month />} {"2024"}</span>
        </div>
        <div className='flex items-center gap-1 text-teal-600 text-xs'>
            <Clock4 size={15} />
            <span><Time /></span>
        </div>
    </div>
  )
}
