import css from './nft.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useFormatNumber } from '@/shared/lib/hooks/useFormatNumber';

type Props = {
  image: string;
  name: string;
  price: number;
  total: number;
};

export default function Nft({ name, price, total, image }: Props): JSX.Element {
  const t = useTranslations('catalogNft.card');
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = useFormatNumber(price);
  return (
    <div
      className={css.wrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <Image src={image} alt="NFT" width={237} height={154} />
      </div>
      <div className={css.fullBlock}>
        <div className={css.namePrice}>
          <div>
            <h3 className={css.nameNft}>{name}</h3>
          </div>
          <div className={css.priceBlock}>
            <h4>{formatPrice}</h4>
            <span>ETH</span>
          </div>
        </div>
        {isHovered ? (
          <div className={css.lastSaleButton}>
            {' '}
            <button
              onClick={() => console.log('сука саня не кликается нехуя')}
              className={css.buyButton}
            >
              {t('buy')}
            </button>{' '}
          </div>
        ) : (
          <div className={css.lastSale}>
            <span>{t('lastSale')}</span>
            {/* после правильных данных с бд поменять эту переменную!!! */}
            <h4>{formatPrice}</h4>
            <span>ETH</span>
          </div>
        )}
      </div>
    </div>
  );
}
