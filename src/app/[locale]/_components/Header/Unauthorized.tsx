import css from './header.module.scss';

import { Button } from '@/shared/ui/button';
import Link from 'next/link';

import { useTranslations, useLocale } from 'next-intl';

export default function Unauthorized(): JSX.Element {
  const t = useTranslations('header');
  const locale = useLocale();
  return (
    <>
      <Link className={css.btnLink} href={`/${locale}/signup`}>
        <Button variant={'ghost'}>{t('signUpBtn')}</Button>
      </Link>
      <Link className={css.coloredBtnLink} href={`/${locale}/signin`}>
        <Button className={css.coloredBtn} variant={'default'}>
          {t('signInBtn')}
        </Button>
      </Link>
    </>
  );
}
