import css from '../page.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type Props = {
    collectionName: string;
    owner: string;
    description: string;
    items: number;
    dateOfCreation: string;
    network: string;
}

export default function NftInfo({collectionName, owner, description, items, dateOfCreation, network}: Props): JSX.Element {
  const t = useTranslations('catalogNft');
  return (
    <div className={css.users}>
      <div>
        <div>
          <p>{collectionName}</p>
          <Image
            src={'/assets/icons/verified.svg'}
            alt="Verified"
            width={16}
            height={16}
          />
        </div>
        <div>
          <p>{owner}</p>
          <Image
            src={'/assets/icons/verified.svg'}
            alt="Verified"
            width={16}
            height={16}
          />
        </div>
      </div>
      <div>
        <p>{description}</p>
        <div className={css.underInfo}>
          <div className={css.items}>
            <p>{t('items')}</p>
            <p>{items}</p>
          </div>
          <div className={css.dateCreate}>
            <p>{t('dateCreated')}</p>
            <p>{dateOfCreation}</p>
          </div>
          <div className={css.network}>
            <p>{t('network')}</p>
            <p>{network}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
