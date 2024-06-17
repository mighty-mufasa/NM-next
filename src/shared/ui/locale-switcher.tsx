'use client';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { Button } from './button';
import { useTransition } from 'react';

export default function LocaleSwitcher(): JSX.Element {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  let currentLocale = Cookies.get('selectedLocale') || locale || 'ru';

  if (locale && locale !== currentLocale) {
    currentLocale = locale;
    Cookies.set('selectedLocale', currentLocale);
  }

  const Switcher = (nextLocale: string) => {
    if (!isPending) {
      startTransition(() => {
        const newLocale =
          nextLocale === currentLocale ? currentLocale : nextLocale;
        Cookies.set('selectedLocale', newLocale);
        let newPath = '';
        if (pathname === '/') {
          newPath = `/${newLocale}`;
        } else {
          newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
        }
        router.replace(newPath);
      });
    }
  };

  const t = useTranslations('footer');
  return (
    <div>
      <Button
        onClick={() => Switcher('ru')}
        variant={'ghost'}
        disabled={currentLocale === 'ru'}
      >
        {t('items.language.rus')}
      </Button>
      <Button
        onClick={() => Switcher('en')}
        variant={'ghost'}
        disabled={currentLocale === 'en'}
      >
        {t('items.language.eng')}
      </Button>
    </div>
  );
}
