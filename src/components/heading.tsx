import React from 'react'
export default function Heading({ text }: { text: string | null }) {
  return (
    <div className="font-bold py-5 text-22">
      {text || ""}
    </div>
  )
}
