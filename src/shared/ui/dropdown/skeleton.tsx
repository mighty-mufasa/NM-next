import { Skeleton } from '@/shared/ui/skeleton';
import css from './dropdown.module.scss';

export default function SkeletonDropDown(): JSX.Element {
  return (
    <Skeleton className={`${css.dropdown} ${css.skeleton}`}>
      <Skeleton>
        <button className={css.dropdownToggle}></button>
      </Skeleton>
    </Skeleton>
  );
}
