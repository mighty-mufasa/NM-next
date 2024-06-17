import css from './signIn.module.scss';
import { useTranslations } from 'next-intl';
import Page from '@/shared/containers/page';

import SignImage from '@/shared/ui/signImage/SignImage';
import SignInSkeleton from './_components/skeleton';

import dynamic from 'next/dynamic';

const SignInForm = dynamic(() => import('./_components/form/SignInForm'), {
  ssr: false,
  loading: () => <SignInSkeleton />
});

export default function SignUp(): JSX.Element {
  const t = useTranslations('signIn');
  return (
    <Page padding>
      <div className={css.wrapper}>
        <div className={css.signIn}>
          <div>
            <p>{t('header.title')}</p>
            <p>{t('header.description')}</p>
          </div>
          <SignInForm />
        </div>
        <div className={css.signRight}>
          <SignImage style="light" />
        </div>
      </div>
    </Page>
  );
}
