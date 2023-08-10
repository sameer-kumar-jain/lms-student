import React from "react"
import { resources } from "../../data"
import { TCategory, TResource, TSubCategory } from "../../types/types"
import SectionDivider from "../../components/section-divider"
import ResourceItem from "../../components/resource-item"


export default function Resources() {
  return (<div className='flex gap-11'>
    <div className='flex-1'>
      <div className="flex flex-col gap-10">
        {resources.map((resource, index) => <div>
          {index > 0 ? <SectionDivider /> : null}
          <ResourceItem {...resource} />
        </div>)}
      </div>
    </div>
    <div className='w-240 relative'>
      <div>
        <button type="button" className="btn style1 w-full" id="menu-button" aria-expanded="true" aria-haspopup="true">
          Choose a Category
        </button>
      </div>
      <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
        <div className="py-1 flex flex-col" role="none">
          {resources.map((resource: TResource) =>
            <a href={`/resources/${resource.id}`}
              className="text-15 font-semibold px-4 py-4 text-sm border-solid border-b border-geyser last:border-b-0"
              role="menuitem" tabIndex={-1} id="menu-item-0">
              {resource.title}
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}