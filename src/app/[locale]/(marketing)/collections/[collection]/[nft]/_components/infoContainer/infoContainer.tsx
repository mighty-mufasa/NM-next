import css from './infoContainer.module.scss';

import { useTranslations } from 'next-intl';
import { Heart } from 'lucide-react';

type Props = {
  title: string;
  description: string | null;
};

export default function InfoContainer({
  title,
  description,
}: Props): JSX.Element {
  const t = useTranslations('nftCard.infoBlock')
  return (
    <div className={css.infoContainer}>
      <div className={css.topItems}>
        <div className={css.gradientText}>
          <p>{t('status')}</p>
        </div>
        <Heart width={22} height={22} />
      </div>
      <div className={css.title}>
        <h1>{title}</h1>
        <h4>{description}</h4>
      </div>
    </div>
  );
}
