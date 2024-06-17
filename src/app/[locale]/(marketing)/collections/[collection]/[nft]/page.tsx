'use client';
import css from './nft.module.scss';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useGetNftQuery } from '@/shared/redux/features/nftApi';

import Page from '@/shared/containers/page';
import Image from 'next/image';

import PriceContainer from './_components/priceContainer/priceContainer';
import InfoContainer from './_components/infoContainer/infoContainer';
import OwnerCard from './_components/ownerCard/OwnerCard';
import Offers from './_components/tabs/offers/Offers';
import PriceHistory from './_components/tabs/priceHistory/PriceHistory';

interface Tab {
  label: string;
  content: React.ReactNode;
}

export default function NftCard({ params }: { params: { nft: string } }) {
  const t = useTranslations('nftCard');

  const { data: nftData, isSuccess, isLoading } = useGetNftQuery({ nftId: params.nft });

  const [activeTab, setActiveTab] = useState<number>(0);

  const changeTab = (index: number) => {
    setActiveTab(index);
  };

  const tabs: Tab[] = [
    { label: t('tabs.offers.title'), content: <Offers /> },
    { label: t('tabs.historyPrice.title'), content: <PriceHistory /> },
  ];
  if (isSuccess && nftData) {
    return (
      <Page padding>
        <div className={css.wrapper}>
          <div className={css.top}>
            <div className={css.leftItems}>
              <Image
                src={nftData.image_url}
                alt="nft"
                width={442}
                height={442}
              />
            </div>
            <div className={css.rightItems}>
              <InfoContainer
                title={nftData.name}
                description={nftData.description}
              />
              <PriceContainer price={nftData.price} />
              <div className={css.tabsContainer}>
                <div className={css.tabs}>
                  {tabs.map((tab, index) => (
                    <div
                      key={index}
                      className={`${css.tabLabel} ${
                        index === activeTab ? css.activeTab : ''
                      }`}
                      onClick={() => changeTab(index)}
                    >
                      <h4>{tab.label}</h4>
                    </div>
                  ))}
                </div>
              </div>
              <div className={css.ownerWrapper}>
                <OwnerCard
                  img={nftData.collectionId.image_url}
                  title={t('ownerBlock.collection')}
                  content={nftData.collectionId.name}
                  verified
                />
                <OwnerCard
                  // img="owner.png"
                  title={t('ownerBlock.owner')}
                  content={nftData.owner.name}
                  verified={false}
                />
              </div>
            </div>
          </div>
          <div className={css.tabsContent}>{tabs[activeTab].content}</div>
        </div>
      </Page>
    );
  }
  else {
    <p>сука</p>
  }
}
