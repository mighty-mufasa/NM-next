import css from './header.module.scss';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';

import Logotype from '@/shared/ui/logotype';
import SearchInput from '@/shared/ui/searchInput/search-input';
import { Button } from '@/shared/ui/button';

export default function Header(): JSX.Element {
  return (
    <header className={cn(css.wrapper)}>
      <div className={css.header}>
        <div className={css.leftItems}>
          <Logotype style="light" />
        </div>
        <div className={css.rightItems}>
          <SearchInput />
          <Button variant={'ghost'}>Регистрация</Button>
          <Button className={css.coloredBtn} variant={'default'}>
            Авторизация
          </Button>
          <Image
            src={'/assets/icons/BurgerMenu.svg'}
            alt="Burger Menu"
            width={40}
            height={40}
          />
        </div>
      </div>
    </header>
  );
}
