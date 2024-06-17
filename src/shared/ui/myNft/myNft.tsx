import css from './MyNft.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type Props = {
  imageCatalog: string;
  name: string;
  price: number;
};

export default function MyCollections({
  name,
  price,
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
      </div>
    </div>
  );
}
