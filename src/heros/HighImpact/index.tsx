'use client'

import React from 'react'
import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, richText }) => {
  return (
    <div className="min-h-[80vh] relative flex flex-col items-center">
      <div className="container mb-16 z-10 relative text-center">
        {richText && <RichText className="mb-8" content={richText} enableGutter={false} />}
        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex gap-4 justify-center">
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink size={'lg'} {...link} />
                </li>
              )
            })}
          </ul>
        )}
      </div>
      <div className="bg-gray-300 rounded-xl w-[1160px] h-[750px]">
        <canvas></canvas>
      </div>
    </div>
  )
}
