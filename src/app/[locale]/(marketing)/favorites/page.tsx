import css from './page.module.scss';
import NftForm from './_components/nftForm/nft-form';
import Page from '@/shared/containers/page';

export default function FavoritesNft() {
  return (
    <Page padding>
      <div className={css.blockInfo}>
        <div className={css.blockNft}>
          <NftForm />
        </div>
      </div>
    </Page>
  );
}
