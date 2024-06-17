import css from './manyNft.module.scss';
import NewsNft from '@/shared/ui/newsNft/newsNft';
import { useTranslations } from 'next-intl';
import Title from '@/shared/ui/title/title';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';

export default function ManyNft(): JSX.Element {
  const t = useTranslations('home.moreAboutNft');
  const keys: string[] = [
    'slider.nftJet',
    'slider.ton',
    'slider.nft',
    'slider.wallet',
    'slider.howBuy',
    'slider.questions',
  ];

  interface News {
    title: string;
    description: string;
  }

  const newsItems: News[] = keys.map((key) => ({
    title: t(`${key}.title`),
    description: t(`${key}.description`),
  }));

  return (
    <div className={css.wrapper}>
      <div className={css.backgroundImage}></div> 
      <Carousel className="w-full " orientation="horizontal">
        <div className={css.carouselTitle}>
          <Title title={t('title')} />
          <div className={css.carousel}>
            <CarouselPrevious className="w-[40px] h-[40px] bg-[#2d2d2d]" />
            <CarouselNext className="w-[40px] h-[40px] bg-[#2d2d2d]" />
          </div>
        </div>
        <CarouselContent className="-ml-0 space-x-6">
          {newsItems.map((e, index: number) => (
            <CarouselItem key={index} className="lg:basis-1/1">
              <NewsNft title={e.title} description={e.description} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
