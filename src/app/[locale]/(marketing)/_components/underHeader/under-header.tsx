import css from './underHeader.module.scss';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

import IdentificationButton from '@/shared/ui/identificationButton/identificationButton';
import SearchInput from '@/shared/ui/searchInput/search-input';

export default function UnderHeader() {
  const t = useTranslations('header');
  const locale = useLocale();
  return (
    <div className={css.wrapper}>
      <Link href={`/${locale}/signin`}>
        <IdentificationButton>{t('IdentificationButton')}</IdentificationButton>
      </Link>
      <div className={css.searchInput}>
        <SearchInput placeholder={t('AbbreviatedPlaceholderName')} />
      </div>
    </div>
  );
}
