import { nftItems } from '../../../_components/topCollections/nftItems';
import css from './nftForm.module.scss';
import MyCollections from '@/shared/ui/myNft/myNft';

export default function NftForm() {
  return (
    <div className={css.cards}>
      {nftItems.map((item, index) => (
        <MyCollections
          key={index}
          name={item.name}
          price={item.price}
          imageCatalog={item.imageCatalog}
        />
      ))}
    </div>
  );
}