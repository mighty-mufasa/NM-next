import css from './messenger.module.scss';
import { useTranslations } from 'next-intl';

export default function Messenger(): JSX.Element {
  const t = useTranslations('messenger');
  return (
    <div className={css.welcome}>
      <h1>{t('welcome')}</h1>
    </div>
  );
}
