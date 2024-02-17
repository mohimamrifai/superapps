import SkeletonCard from '@/components/SkeletonCard'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'


export default function Loading() {
  return (
    <div className="w-full mx-auto py-10">
      <Skeleton className="w-[400px] h-[40px] rounded-md" />
      <div className="mt-5 grid grid-cols-3 gap-4">
        {"abcdef".split('').map((data: any) => (
          <SkeletonCard key={data} />
        ))}
      </div>
    </div>
  )
}
