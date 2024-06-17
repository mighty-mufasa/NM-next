import css from './buttonLoadMore.module.scss';
import Image from 'next/image';
import { Button } from '../button';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function ButtonLoadMore({ children, onClick}: Props): JSX.Element {
  return (
    <Button onClick={onClick} variant={'outline'} className={css.wrapper}>
      {children}
      <Image
        src={'/assets/arrows/top-right-arrow.svg'}
        width={12}
        height={12}
        alt="Arrow"
      />
    </Button>
  );
}
