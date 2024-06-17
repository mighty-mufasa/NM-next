'use client';
import css from './header.module.scss';

import Link from 'next/link';

import ProfileDropdown from './_components/Dropdowns/ProfileDropdown';
import { Heart, MessageCircleMore, Wallet } from 'lucide-react';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Authorized(): JSX.Element {
  const locale = useLocale();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className={css.authorizedWrapper}>
      <div className={css.leftItems}>
        <div
          className={`${css.message} ${
            isActive(`/${locale}/messenger`) ? css.active : ''
          }`}
        >
          <Link href={`/${locale}/messenger`}>
            <MessageCircleMore width={24} height={24} />
          </Link>
        </div>
        <div
          className={`${css.favorite} ${
            isActive(`/${locale}/favorites`) ? css.active : ''
          }`}
        >
          <Link href={`/${locale}/favorites`}>
            <Heart width={22} height={22} />
          </Link>
        </div>
        <div className={css.wallet}>
          <Wallet width={22} height={20} />
          <p>
            123 <span>ETH</span>
          </p>
        </div>
      </div>
      <ProfileDropdown />
    </div>
  );
}
