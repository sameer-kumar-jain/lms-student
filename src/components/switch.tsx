'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Switch({ on, off, value }: { on: string, off: string, value: boolean }) {
  const router = useRouter()
  const onClick = (b: boolean) => () => {
    let path = `/events?view=${b ? "calender" : "grid"}`
    router.push(path);
  }
  return (
    <div className='flex border-blue-chill border-.5 rounded-md bg-white shadow-switch p-px'>
      <SwitchItem text={off} selected={!value} onClick={onClick(false)} />
      <SwitchItem text={on} selected={value} onClick={onClick(true)} />
    </div>
  )
}

const SwitchItem = ({ text, selected, onClick }: { text: string, selected: boolean, onClick: () => void }) => {
  return (
    <div onClick={onClick} className={`${selected ? "bg-blue-chill text-white" : ""} cursor-pointer w-39 h-30 rounded-md font-extrabold flex justify-center items-center`}>{text}</div>
  )
}