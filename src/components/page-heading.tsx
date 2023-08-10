import React from 'react'
import SectionDivider from './section-divider'
export default function PageHeading({ text }: { text: string | React.ReactNode | null }) {
  return (
    <>
      <div className="text-[28px] font-extrabold py-[16px]">
        {text || ""}
      </div>
      <SectionDivider />
    </>
  )
}
