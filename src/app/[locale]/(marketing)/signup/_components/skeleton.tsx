import css from '../signUp.module.scss';

import { Skeleton } from '@/shared/ui/skeleton';
import { cn } from '@/shared/lib/utils';

export default function SignUpSkeleton(): JSX.Element {
  return (
    <div className={css.skeleton}>
      <Skeleton className="h-[37px] w-[400px] rounded-2xl" />
      <Skeleton className="h-[37px] w-[400px] rounded-2xl" />
      <div className={css.passwords}>
        <Skeleton className="h-[37px] w-[190px] rounded-2xl" />
        <Skeleton className="h-[37px] w-[190px] rounded-2xl" />
      </div>
      <Skeleton className="h-[37px] w-[400px] rounded-2xl" />
      <Skeleton className={cn(css.skeletonButton, 'h-[38px] w-[221px] rounded-2xl')} />
    </div>
  );
}
