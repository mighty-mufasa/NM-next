'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/button';
import ModalNFtPurchase from '../ModalNFtPurchase';

export default function ModalTrigger(): JSX.Element {
  const [isOpenModal, setIsModal] = useState<boolean>(false);
  const t = useTranslations('nftCard.priceBlock')

  return (
    <ModalNFtPurchase open={isOpenModal} setIsOpen={setIsModal}>
      <Button>{t('buyBtn')}</Button>
    </ModalNFtPurchase>
  );
}
