import React from 'react'
import SectionDivider from '../../components/section-divider'
import PageHeading from '../../components/page-heading'

export default function ResourcesLayout({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <div className='w-full px-8 flex flex-col flex-1'>
      <PageHeading text={"Community"} />      
      {children}
    </div>
  )
}