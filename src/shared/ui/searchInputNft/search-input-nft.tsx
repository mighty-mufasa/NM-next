import css from './searchInputNft.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function SearchInputNft(): JSX.Element {
  const t = useTranslations('header');
  return (
    <div className={css.wrapper}>
      <Image
        src={'/assets/icons/Loupe.svg'}
        width={18}
        height={18}
        alt="Loupe"
      />
      <input type="text" placeholder={t('inputPlaceholder')} />
    </div>
  );
}
