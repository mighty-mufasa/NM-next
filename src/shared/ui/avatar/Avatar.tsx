import css from './Avatar.module.scss';
import Image from 'next/image';

type AvatarProps = {
  AvatarUrl: string;
};

export default function Avatar({ AvatarUrl }: AvatarProps): JSX.Element {
  return (
    <div className={css.avatar}>
      <Image
        src={AvatarUrl}
        alt={'Avatar'}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
}
