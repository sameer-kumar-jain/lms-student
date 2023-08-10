import React from 'react'
export default function PendingCourseProgress({ percentage }: { percentage: number }) {
  return (
    <div className='w-full bg-slate-200 relative h-1'>
      <div className='absolute left-0 top-0 bottom-0 bg-energy-yellow' style={{ width: `${percentage}%` }}></div>
    </div>
  )
}