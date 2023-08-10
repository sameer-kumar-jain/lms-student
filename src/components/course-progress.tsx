import React from 'react'
export default function CourseProgress({ percentage }: { percentage: number }) {
  return (
    <div className='w-full bg-slate-200 relative h-3.5 rounded-md'>
      <div className={`absolute left-0 top-0 bottom-0 ${percentage === 100 ? 'bg-medium-spring-green' : 'bg-energy-yellow'} rounded-md`} style={{ width: `${percentage}%` }}></div>
    </div>
  )
}