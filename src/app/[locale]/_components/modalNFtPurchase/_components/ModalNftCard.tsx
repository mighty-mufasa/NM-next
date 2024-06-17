import css from '../ModalNFtPurchase.module.scss';
import Image from 'next/image';
export default function ModalNftCard() {
  return (
    <div className={css.cardWrapper}>
      <div>
        <Image
          src={'/assets/forTest/tgNft.png'}
          width={63}
          height={63}
          alt="Nft"
        />
      </div>
      <div>
        <h3>Telegram Username</h3>
        <h4>Telegram Usernames</h4>
      </div>
    </div>
  );
}
