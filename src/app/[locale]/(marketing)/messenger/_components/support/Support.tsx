import css from './Support.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Support(): JSX.Element {
    const t = useTranslations('messenger.support')
  return (
    <div className={css.wrapper}>
      <div className={css.avatarContainer}>
        <Image
          src={`/assets/icons/headphones.svg`}
          width={28}
          height={28}
          alt="Avatar"
        />
      </div>
      <div className={css.senderInfo}>
        <h1>{t('name')}</h1>
        <h2>{t('message')}</h2>
      </div>
    </div>
  );
}
