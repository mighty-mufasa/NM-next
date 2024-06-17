import css from '../signIn.module.scss';

import { Skeleton } from '@/shared/ui/skeleton';
import { cn } from '@/shared/lib/utils';

export default function SignInSkeleton(): JSX.Element {
  return (
    <div className={css.skeleton}>
      <Skeleton className="h-[37px] w-[400px] rounded-2xl" />
      <Skeleton className="h-[37px] w-[400px] rounded-2xl" />
      <Skeleton className={cn(css.skeletonLabel, "h-[14px] w-[124px] rounded-2xl")} />
      <Skeleton className={cn(css.skeletonButton, "h-[38px] w-[163px] rounded-2xl")} />
    </div>
  );
}
