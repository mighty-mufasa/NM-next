import css from './signUp.module.scss';

import Page from '@/shared/containers/page';
import SignImage from '@/shared/ui/signImage/SignImage';
import SignUpSkeleton from './_components/skeleton';

import { useTranslations } from 'next-intl';

import dynamic from 'next/dynamic';

const SignInForm = dynamic(() => import('./_components/form/SignUpForm'), {
  ssr: false,
  loading: () => <SignUpSkeleton />
});

export default function SignUp(): JSX.Element {
  const t = useTranslations('signUp');
  return (
    <Page padding>
      <div className={css.wrapper}>
        <div className={css.signUp}>
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
