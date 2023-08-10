import React from 'react'
export default function TransparentButton({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <button className='rounded-md px-[17px] py-[14px] font-bold' >{children}</button>
  )
}
