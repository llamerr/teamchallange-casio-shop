import React from 'react';

import { cn } from '@/lib/utils';

type GridProps = {
  isLoading?: boolean;
  renderSkeleton?: (key: any) => React.JSX.Element;
  skeletonCount?: number;
  children: React.ReactNode;
  className?: string;
};

export function Grid({ isLoading = false, renderSkeleton, skeletonCount = 0, children, className }: GridProps) {
  return (
    <div className={cn(`grid ${isLoading && 'grid-rows-1 auto-rows-[0px] overflow-hidden'}`, className)}>
      {
        isLoading
          ? renderSkeleton && Array.from({ length: skeletonCount }).map((_, i) => renderSkeleton(i))
          : children
      }
    </div>
  );
}
