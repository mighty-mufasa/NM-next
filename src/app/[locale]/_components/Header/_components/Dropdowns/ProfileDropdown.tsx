'use client';
import css from './Dropdowns.module.scss';
import { useState, useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';

import { cn } from '@/shared/lib/utils';

import Link from 'next/link';

import { Grid3X3, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Button } from '@/shared/ui/button';

export default function ProfileDropdown(): JSX.Element {
  const t = useTranslations('header.dropdown.profileMenu');
  const locale = useLocale();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={css.dropdown} ref={dropdownRef}>
      <div onClick={toggleMenu}>
        <Avatar>
          <AvatarImage
            className={isOpen ? 'opacity-50 transition-all' : ''}
            src="/assets/forTest/cardNft.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      {isOpen && (
        <div className={cn(css.content)}>
          <div className={css.item}>
            <div className={css.icon}>
              <Grid3X3 width={20} height={20} className="invert" />
            </div>
            <Link href={`/${locale}/myCollections`}>
              {t('myCollection.title')}
            </Link>
          </div>
          <div className={css.item}>
            <div className={css.icon}>
              <LogOut color="#5763D0" width={20} height={20} />
            </div>
            <Button className={css.exitBtn} variant="ghost">
              {t('exit.title')}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
