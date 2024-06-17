import css from './sortingBar.module.scss';
<<<<<<< HEAD

export default function SortingBar(): JSX.Element {
  return (
    <div className={css.wrapper}>
        <div className={css.active}>1 день</div>
        <div>7 дней</div>
        <div>30 дней</div>
        <div>Всё время</div>
=======
import { useTranslations } from 'next-intl';

interface SortingBarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

export default function SortingBar({
  activeItem,
  onItemClick,
}: SortingBarProps): JSX.Element {
  const t = useTranslations('home.topCollections.sortingBar');

  const handleClick = (item: string) => {
    onItemClick(item);
  };

  return (
    <div className={css.wrapper}>
      <div
        className={activeItem === '1day' ? css.active : ''}
        onClick={() => handleClick('1day')}
      >
        <p>{t('1day')}</p>
      </div>
      <div
        className={activeItem === '7days' ? css.active : ''}
        onClick={() => handleClick('7days')}
      >
        <p>{t('7days')}</p>
      </div>
      <div
        className={activeItem === '30days' ? css.active : ''}
        onClick={() => handleClick('30days')}
      >
        <p>{t('30days')}</p>
      </div>
      <div
        className={activeItem === 'allTime' ? css.active : ''}
        onClick={() => handleClick('allTime')}
      >
        <p>{t('allTime')}</p>
      </div>
>>>>>>> 01bb2b1 (deploy)
    </div>
  );
}
