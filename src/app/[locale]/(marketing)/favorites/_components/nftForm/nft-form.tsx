import { nftItems } from '../../../_components/topCollections/nftItems';
import css from './nftForm.module.scss';
import FavoritesNft from '@/shared/ui/favoritesNft/favoritesNft';

export default function NftForm() {
  return (
    <div className={css.cards}>
      {nftItems.map((item, index) => (
        <FavoritesNft
          key={index}
          name={item.name}
          price={item.price}
          total={item.total}
          imageCatalog={item.imageCatalog}
        />
      ))}
    </div>
  );
}
