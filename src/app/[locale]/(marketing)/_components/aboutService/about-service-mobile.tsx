import css from './aboutService.module.scss';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';

export default function AboutServiceMobile(): JSX.Element {
  const t = useTranslations('home.aboutOurService');
  const locale = useLocale();
  return (
    <div className={css.mobileWrapper}>
      <div>
        <Image
          alt="Illustration"
          src={'/assets/illustrations/mobileIllustrarion.png'}
          width={329}
          height={226}
        />
      </div>
      <div>
        <h4>{t('title')}</h4>
        <h5>{t('description')}</h5>
        <Link href={`/${locale}/catalog`}>
          <Button>{t('btn')}</Button>
        </Link>
      </div>
    </div>
  );
}
