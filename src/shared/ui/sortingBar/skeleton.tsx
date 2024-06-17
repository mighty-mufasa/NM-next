import { Skeleton } from '@/shared/ui/skeleton';
import css from './sortingBar.module.scss';

export default function SkeletonSortingBar(): JSX.Element {
  return (
    <Skeleton className={css.skeletonPc}>
      <div>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
    </Skeleton>
  );
}
