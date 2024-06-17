'use client';
import css from './topCollections.module.scss';
<<<<<<< HEAD
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import SortingBar from '@/shared/ui/sortingBar/sorting-bar';
import MiniNft from '@/shared/ui/miniNft/mini-nft';
import { nftItems } from './nftItems';

export default function TopCollections(): JSX.Element {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <div className={css.select}>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Популярное" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">In Progress</SelectItem>
              <SelectItem value="dark">In Progress</SelectItem>
              <SelectItem value="system">In Progress</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <SortingBar />
        </div>
      </div>
      <div className={css.cards}>
        {nftItems.map((item, index: number) => (
          <MiniNft
            key={index}
            name={item.name}
            percentage={item.percentage}
            price={item.price}
            total={item.total}
          />
        ))}
      </div>
=======
import ButtonLoadMore from '@/shared/ui/buttonLoadMore/button-load-more';

import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetCollectionsQuery } from '@/shared/redux/features/collectionsApi';

import dynamic from 'next/dynamic';

import SkeletonDropDown from '@/shared/ui/dropdown/skeleton';
import SkeletonSortingBar from '@/shared/ui/sortingBar/skeleton';
import SkeletonMiniNft from '@/shared/ui/miniNft/skeleton';

import { toast } from 'sonner';

import { Collection } from '@/shared/interfaces/Collection';
import { Button } from '@/shared/ui/button';
import { RootState } from '@/shared/redux/store';
import Link from 'next/link';

type Option = {
  value: string;
  label: string;
};

const Dropdown = dynamic(() => import('@/shared/ui/dropdown/dropdown'), {
  ssr: false,
  loading: () => <SkeletonDropDown />,
});

const SortingBar = dynamic(() => import('@/shared/ui/sortingBar/sorting-bar'), {
  ssr: false,
  loading: () => <SkeletonSortingBar />,
});

const MiniNft = dynamic(() => import('@/shared/ui/miniNft/mini-nft'), {
  ssr: false,
  loading: () => <SkeletonMiniNft />,
});

export default function TopCollections(): JSX.Element {
  const t = useTranslations('home.topCollections');
  const locale = useLocale();

  const [total, setTotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const [count, setCount] = useState<number>(12);
  const [offset, setOffset] = useState<number>(0);
  const [sort, setSort] = useState<string>('market_cap');

  const { data, isError } = useGetCollectionsQuery({ offset, count, sort });
  const isSignedIn = useSelector((state: RootState) => state.auth.isSignedIn);

  useEffect(() => {
    if (data) {
      setTotal(data.total);
      setIsLoading(false);
      console.log('Fetched data:', data);
    }
    if (isError) {
      setError(new Error('Failed to fetch collections'));
      setIsLoading(false);
    }
  }, [data, isError]);

  if (error) {
    console.error('Failed to fetch collections:', error);
  }

  const keys: string[] = ['select.marketCap','select.numOwners'];
  const mobileKeys: string[] = ['mobileSelect.sold','mobileSelect.active','mobileSelect.public'];
  const [selectedDateSort, setSelectedDateSort] = useState<string>('1day');

  const selectItems: Option[] = keys.map((key) => ({
    value: t(`${key}.value`),
    label: t(`${key}.title`),
  }));

  const mobileSelectItems: Option[] = mobileKeys.map((key) => ({
    value: t(`${key}.value`),
    label: t(`${key}.title`),
  }));

  const handleSortDateClick = (selectedItem: string): void => {
    setSelectedDateSort(selectedItem);
    console.log('selectedDateSort:', selectedItem);
  };

  const handleSelect = (option: Option) => {
    setSort(option.value);
    console.log('Selected option:', option);
  };

  const handleMobileSelect = (option: Option) => {
    console.log('Selected option:', option);
  };

  const handleLoadMore = () => {
    if (data && count >= total) {
      toast.info(t('messages.over'));
    } else {
      setCount((prevCount) => prevCount + 12);
    }
  };

  return isSignedIn ? (
    <div className={css.wrapper}>
      <div className={css.backgroundImage}></div>
      <div className={css.header}>
        <div className={css.select}>
          <Dropdown options={selectItems} onSelect={handleSelect} />
        </div>
        <div className={css.sortingBar}>
          <SortingBar
            activeItem={selectedDateSort}
            onItemClick={handleSortDateClick}
          />
        </div>
        <div className={css.mobileSelect}>
          <Dropdown options={mobileSelectItems} onSelect={handleMobileSelect} />
        </div>
      </div>
      <div className={css.cards}>
        {data?.data.map((item: Collection, index: number) => (
          <MiniNft
            id={item._id}
            key={index}
            name={item.name}
            totalPrice={item.totalNftPrice}
            lowestPrice={item.lowestNftPrice}
            image={item.image_url}
          />
        ))}
      </div>
      <div className={css.btnMore}>
        <ButtonLoadMore onClick={handleLoadMore}>
          {t('cards.btn')}
        </ButtonLoadMore>
      </div>
    </div>
  ) : (
    <div className={css.message}>
      <p>{t('unauthenticated.title')}</p>
      <Link href={`/${locale}/signin`}>
        <Button className={css.coloredBtn} variant={'default'}>
          {t('unauthenticated.btn')}
        </Button>
      </Link>
>>>>>>> 01bb2b1 (deploy)
    </div>
  );
}
