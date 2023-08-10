import React from 'react'
export default function WhiteButton({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <button className='bg-white rounded-md px-[17px] py-[14px] font-bold shadow-0020' >{children}</button>
  )
}
