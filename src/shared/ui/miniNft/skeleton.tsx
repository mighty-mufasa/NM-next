import { Skeleton } from '@/shared/ui/skeleton';
import css from '@/shared/ui/miniNft/miniNft.module.scss'

import { LoadingSpinner } from '@/shared/ui/loading-spinner';

export default function SkeletonMiniNft(): JSX.Element {
  return (
    <Skeleton className={css.wrapperSkeleton}>
      <div className={css.leftItems}></div>
      <div className={css.middleItems}>
        <LoadingSpinner/>
      </div>
      <div className={css.rightItems}>
        <div></div>
        <div></div>
      </div>
    </Skeleton>
  );
}
