import { Skeleton } from '@/components/ui/skeleton';

export const NewsCardSkeleton = () => (
  <div className="relative flex aspect-[1.262/1] flex-col items-center justify-center border-none bg-darkBackground text-white">
    <div className="absolute z-0 flex size-full items-center justify-center opacity-50">
      <Skeleton className="size-16 rounded-full" />
    </div>
    <div className="z-10 flex size-full flex-col items-start justify-end bg-overlayGray p-16 text-white">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  </div>
);
