import css from './favoritesNft.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type Props = {
  imageCatalog: string;
  name: string;
  price: number;
  total: number;
};

export default function FavoritesNft({
  name,
  price,
  total,
  imageCatalog,
}: Props): JSX.Element {
  const t = useTranslations('catalogNft.card');

  return (
    <div className={css.wrapper}>
      <div>
        <Image
          src={`/assets/forTest/${imageCatalog}`}
          alt="NFT"
          width={237}
          height={154}
        />
        <div className={css.heartBlock}>
          <Image
            src={`/assets/icons/blueHeart.svg`}
            alt="NFT"
            width={17}
            height={15}
          />
        </div>
      </div>
      <div className={css.fullBlock}>
        <div className={css.namePrice}>
          <div>
            <h3 className={css.nameNft}>{name}</h3>
          </div>
          <div className={css.priceBlock}>
            <h4>{price}</h4>
            <span>ETH</span>
          </div>
        </div>
        <div className={css.lastSale}>
          <span>{t('lastSale')}</span>
          <h4>{total}</h4>
          <span>ETH</span>
        </div>
      </div>
    </div>
  );
}
