import { Separator } from '@/shared/ui/separator';
import { useTranslations } from 'next-intl';
import css from '../ModalNFtPurchase.module.scss';

type Props = {
  price: number;
  networkCommission: number;
};

export default function ModalNftStats({
  price,
  networkCommission,
}: Props): JSX.Element {
  const t = useTranslations('catalogNft.modal');
  const total: number = price + networkCommission;
  return (
    <>
      <div className={css.stats}>
        <div className={css.statsItem}>
          <div>
            <h2>{t('price.title')}</h2>
            <h2>{price} ETH</h2>
          </div>
          <div>
            <h4>{t('price.description')}</h4>
          </div>
        </div>
        <div className={css.statsItem}>
          <div>
            <h2>{t('networkCommission.title')}</h2>
            <h2>{networkCommission} ETH</h2>
          </div>
          <div>
            <h4>{t('networkCommission.description')}</h4>
          </div>
        </div>
      </div>
      <Separator orientation="horizontal" decorative />
      <div className={css.total}>
        <h2>{t('total')}</h2>
        <h2>{total} ETH</h2>
      </div>
    </>
  );
}
