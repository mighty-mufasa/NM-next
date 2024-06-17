<<<<<<< HEAD
import css from './miniNft.module.scss';
import Image from 'next/image';
export default function MiniNft(): JSX.Element {
  return (
    <div className={css.wrapper}>
        <div className={css.leftItems}>
            <Image src={'/assets/forTest/tgNft.png'} alt='NFT' width={65} height={60}/>
        </div>
        <div className={css.middleItems}>
            <div>
                <h3>Telegram Usernames</h3>
                <Image src={'/assets/icons/verified.svg'} alt='Verified' width={11} height={11}/>
            </div>
            <div>
                <h4>Цена</h4>
                <h4>0.4 ETH</h4>
            </div>
        </div>
        <div className={css.rightItems}>
            <div>
                <h4>
                    2.223 <span>ETH</span>
                </h4>
            </div>
            <div>
                <p>+57%</p>
            </div>
        </div>
    </div>
  )
=======
'use client';
import css from './miniNft.module.scss';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { useFormatNumber } from '@/shared/lib/hooks/useFormatNumber';
import Link from 'next/link';

type Props = {
  id: string;
  image: string;
  name: string;
  totalPrice: number;
  lowestPrice: number;
};

export default function MiniNft({
  id,
  name,
  totalPrice = 0,
  lowestPrice = 0,
  image,
}: Props): JSX.Element {
  const t = useTranslations('home.topCollections.cards');
  const locale = useLocale();
  const formatTotalPrice = useFormatNumber(totalPrice);
  const formatLowestPrice = useFormatNumber(lowestPrice);
  return (
    <Link href={`/${locale}/collections/${id}`} className={css.wrapper}>
      <div className={css.image}>
        <Image src={`${image}`} alt="NFT" width={65} height={60} />
      </div>
      <div className={css.content}>
        <div className={css.info}>
          <div className={css.name}>
            <h3>{name}</h3>
            <Image
              src={'/assets/icons/verified.svg'}
              alt="Verified"
              width={11}
              height={11}
            />
          </div>
          <div className={css.price}>
            <h4 className='text-light-text-black-70'>{t('price')}</h4>
            <h4 className='text-light-text-black-70'>{formatTotalPrice} ETH</h4>
          </div>
        </div>
        <div className={css.priceInfo}>
          <h4>{formatLowestPrice} ETH</h4>
        </div>
      </div>
    </Link>
  );
>>>>>>> 01bb2b1 (deploy)
}
