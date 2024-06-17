import css from './offers.module.scss';

import { Separator } from '@/shared/ui/separator';
import { offerItems } from './offersItems';

import { useTranslations } from 'next-intl';

export default function Offers(): JSX.Element {
  const t = useTranslations('nftCard.tabs.offers');
  return (
    <div className={css.wrapper}>
      <div>
        <h3>{t('title')}</h3>
      </div>
      <Separator orientation="horizontal" decorative />
      <div className={css.scroll}>
        <div className={css.gridContainer}>
          <div className={css.textInfo}>
            <h5>{t('price')}</h5>
            <h5>{t('inRub')}</h5>
            <h5>{t('expirationDate')}</h5>
            <h5>{t('by')}</h5>
          </div>
          {offerItems.map((items, index) => (
            <div className={css.textData} key={index}>
              <h4>{items.price}</h4>
              <h4>{items.inRub}</h4>
              <h4>{items.expirationDate}</h4>
              <h4 className={css.colorBy}>{items.by}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
