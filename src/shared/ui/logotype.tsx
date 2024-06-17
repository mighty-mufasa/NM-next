import Image from 'next/image';
import Link from 'next/link';

type Props = {
  style: 'light' | 'dark';
};

export default function Logotype({ style }: Props): JSX.Element {
  return (
    <Link href={'/'}>
      <Image
        alt="Logotype"
        src={`/assets/logo/logo-${style}.svg`}
        width={157}
        height={24}
      />
    </Link>
  );
}
