import Link from 'next/link';
import css from './senderCard.module.scss';
import Image from 'next/image';
import { useLocale } from 'next-intl';

type Props = {
  avatar: string;
  name: string;
  lastMessage: string;
  idChat: string;
  isActive?: boolean;
  onClick?: () => void;
};

export default function SenderCard({
  avatar,
  name,
  lastMessage,
  isActive,
  idChat,
  onClick,
}: Props): JSX.Element {
  const locale = useLocale();
  return (
    <Link
      href={`/${locale}/messenger/${idChat}`}
      className={`${css.wrapper} ${isActive ? css.active : ''}`}
      onClick={onClick}
    >
      <Image
        src={`/assets/forTest/${avatar}`}
        width={52}
        height={52}
        alt="Avatar"
        className={css.avatar}
      />

      <div className={css.senderInfo}>
        <h1>{name}</h1>
        <h2>{lastMessage}</h2>
      </div>
    </Link>
  );
}
