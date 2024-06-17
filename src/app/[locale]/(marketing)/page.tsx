<<<<<<< HEAD
import Page from '@/shared/containers/page';
import Title from '@/shared/ui/title/title';
import css from './home.module.scss';
import TopCollections from './_components/topCollections/top-collections';

export default function Home(): React.ReactElement {
  return (
    <Page>
      <section className={css.wrapper}>
        <Title title="Топ коллекций" />
        <TopCollections />
=======
import css from './home.module.scss';

import Page from '@/shared/containers/page';
import Title from '@/shared/ui/title/title';

import ManyNft from './_components/manyNft/many-nft';
import AboutService from './_components/aboutService/about-service';
import AboutServiceMobile from './_components/aboutService/about-service-mobile';
import UnderHeader from './_components/underHeader/under-header';
import TopCollectionsS from './_components/topCollections/skeleton';

import { useTranslations } from 'next-intl';
import { LoadingSpinner } from '@/shared/ui/loading-spinner';
import dynamic from 'next/dynamic';

const TopCollections = dynamic(() => import ('./_components/topCollections/top-collections'), {
ssr: false,
loading: () => <TopCollectionsS />
})

export default function Home(): React.ReactElement {
  const t = useTranslations('home');
  return (
    <Page padding>
      <section className={css.wrapper}>
        <UnderHeader />
        <div className={css.topCollections}>
          <Title title={t('topCollections.title')} />
          <TopCollections />
        </div>
        <ManyNft />
        <div className={css.aboutOurService}>
          <Title title={t('aboutOurService.title')} />
          <AboutService />
        </div>
        <div className={css.aboutOurServiceMobile}>
          <AboutServiceMobile />
        </div>
>>>>>>> 01bb2b1 (deploy)
      </section>
    </Page>
  );
}
