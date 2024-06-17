import css from './searchInput.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

<<<<<<< HEAD
export default function SearchInput(): JSX.Element {
=======
type Props = {
  placeholder: string
}

export default function SearchInput({placeholder}: Props): JSX.Element {
>>>>>>> 01bb2b1 (deploy)
  const t = useTranslations('header');
  return (
    <div className={css.wrapper}>
      <Image
        src={'/assets/icons/Loupe.svg'}
        width={18}
        height={18}
        alt="Loupe"
      />
<<<<<<< HEAD
      <input type="text" placeholder={t('inputPlaceholder')} />
=======
      <input type="text" placeholder={placeholder}  />
>>>>>>> 01bb2b1 (deploy)
    </div>
  );
}
