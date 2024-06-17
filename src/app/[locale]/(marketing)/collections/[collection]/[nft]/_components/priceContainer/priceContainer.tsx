import css from './priceContainer.module.scss';

import { Button } from '@/shared/ui/button';
import Image from 'next/image';
import ModalTrigger from '@/app/[locale]/_components/modalNFtPurchase/_components/ModalNftPurchaseTrigger';
import { useTranslations } from 'next-intl';

type Props = {
  price: number;
};

export default function PriceContainer({ price }: Props): JSX.Element {
  const t = useTranslations('nftCard.priceBlock');
  return (
    <div className={css.priceContainer}>
      <div>
        <h5>{t('title')}</h5>
        <div className={css.price}>
          <h2>{price} ETH</h2>
          <h5>5 680 $ (527 010 ₽)</h5>
        </div>
      </div>
      <div className={css.btns}>
        <ModalTrigger />
        <Button>
          <Image
            src={'/assets/icons/label.svg'}
            alt=""
            width={15}
            height={15}
          />
          {t('offerBtn')}
        </Button>
      </div>
    </div>
  );
}
