import css from './aboutService.module.scss';
import { Button } from '@/shared/ui/button';
import Image from 'next/image';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function AboutService(): JSX.Element {
  const t = useTranslations('home.aboutOurService')
  const locale = useLocale()
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <div>
          <h3>
            {t('description')}
          </h3>
          <Link href={`/${locale}/catalog`}>
            <Button>{t('btn')}</Button>
          </Link>
        </div>
        <div>
          <Image
            src={'/assets/illustrations/homeIllustration.png'}
            alt="Home Illustration"
            width={750}
            height={450}
          />
        </div>
      </div>
    </div>
  );
}
