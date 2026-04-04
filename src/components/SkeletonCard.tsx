"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="h-[360px] glass-card rounded-3xl p-6 flex flex-col gap-4 overflow-hidden border border-border/50 bg-background/50">
      <div className="flex justify-between items-start">
        <Skeleton className="h-6 w-24 rounded-full" />
        <Skeleton className="h-5 w-12" />
      </div>

      <div className="flex-1 flex flex-col mt-2">
        <Skeleton className="h-7 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        
        <div className="flex gap-2 mt-auto pb-4">
          <Skeleton className="h-6 w-16 rounded-md" />
          <Skeleton className="h-6 w-16 rounded-md" />
        </div>
      </div>

      <div className="pt-4 border-t border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
        
        <Skeleton className="h-6 w-16 rounded-md" />
      </div>
    </div>
  );
}
