import css from './OwnerCard.module.scss';
import Image from 'next/image';

type Props = {
  img?: string;
  title: string;
  content: string;
  verified: boolean;
};

export default function OwnerCard({
  img,
  title,
  content,
  verified,
}: Props): JSX.Element {
  return (
    <div className={css.wrapper}>
      <div className={css.item}>
        <Image
          src={`${img || '/assets/forTest/owner.png'}  `}
          width={45}
          height={45}
          alt="NFT"
          className={css.collectionImg}
        />
        <div>
          <h6>{title}</h6>
          <div>
            <h5>{content}</h5>
            {verified && (
              <Image
                alt="Verified"
                src={'/assets/icons/verified.svg'}
                width={12}
                height={12}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
