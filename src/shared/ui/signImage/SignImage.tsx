import Image from 'next/image';
import css from './signImage.module.scss';

type Props = {
  style: 'light' | 'dark';
};

export default function SignImage({ style }: Props) {
  return (
    <div className={css.rightDiv}>
      <div>
        <Image
          alt="Logotype"
          src={`/assets/logo/logo-${style}.svg`}
          width={367}
          height={56}
        />
        <p>NFT Marketplace</p>
      </div>
    </div>
  );
}
