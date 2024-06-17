import css from './Banner.module.scss';
import Image from 'next/image';

type BannerProps = {
  bannerUrl: string;
};

export default function Banner({ bannerUrl }: BannerProps): JSX.Element {
  return (
    <div className={css.banner}>
      <Image
        src={bannerUrl}
        alt={'Banner'}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className={css.blurOverlay}></div>
    </div>
  );
}
