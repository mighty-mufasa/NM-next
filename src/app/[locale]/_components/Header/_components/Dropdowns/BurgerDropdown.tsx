'use client';
import css from './Dropdowns.module.scss';

import { useState, useEffect, useRef, MouseEvent as ReactMouseEvent } from 'react';
import { useTranslations, useLocale } from 'next-intl';

import LanguageSwitcher from './LanguageSwitcher';
import Link from 'next/link';

import { Globe, Headset, Menu, X, Heart } from 'lucide-react';

export default function BurgerDropdown(): JSX.Element {
  const t = useTranslations('header.dropdown.burgerMenu');
  const locale = useLocale();
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (event: ReactMouseEvent) => {
    event.stopPropagation();
    setTimeout(() => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    }, 0);
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
  }, [isOpen]);

  return (
    <div className={css.dropdown} ref={dropdownRef}>
      <div className={css.trigger} onClick={toggleMenu}>
        {isOpen ? (
          <X width={26} height={26} className="invert" />
        ) : (
          <Menu width={26} height={26} className="invert" />
        )}
      </div>
      {isOpen && (
        <div className={css.content}>
          <div className={css.favorites}>
            <div className={css.item}>
              <div className={css.icon}>
                <Heart width={20} height={20} className="invert" />
              </div>
              <Link href={`/${locale}/favorites`}>
                {t('favorites.title')}
              </Link>
            </div>
          </div>
          <div className={css.item}>
            <div className={css.icon}>
              <Headset width={20} height={20} className="invert" />
            </div>
            <Link href={'/'}>{t('support.title')}</Link>
          </div>
          <div className={css.languageSwitcher}>
            <div className={css.item}>
              <div className={css.icon}>
                <Globe width={20} height={20} className="invert" />
              </div>
              <p>{t('language.title')}</p>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </div>
  );
}
