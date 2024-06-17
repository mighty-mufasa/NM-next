import css from './footer.module.scss';

import Logotype from '@/shared/ui/logotype';
import LocaleSwitcher from '@/shared/ui/locale-switcher';

import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

export default function Footer(): JSX.Element {
  const t = useTranslations('footer');
  return (
    <footer className={css.wrapper}>
      <div className={css.footer}>
        <div>
          <div className={css.logotypeContainer}>
            <Logotype style="light" />
            <p>{t('description')}</p>
          </div>
          <div>
            <Link
              href={'https://www.youtube.com/watch?v=0qhRyAV8sL4'}
              passHref
              target="_blank"
            >
              <Image
                className={css.hoverImg}
                src={'/assets/icons/socials/youtube.svg'}
                alt="YouTube"
                width={26}
                height={18}
              />
            </Link>
            <Link
              href={'https://web.telegram.org/a/#1234060895'}
              passHref
              target="_blank"
            >
              <Image
                className={css.hoverImg}
                src={'/assets/icons/socials/telegram.svg'}
                alt="Telegram"
                width={21}
                height={18}
              />
            </Link>
            <Link
              href={'https://vk.com/public25014038'}
              passHref
              target="_blank"
            >
              <Image
                className={css.hoverImg}
                src={'/assets/icons/socials/vk.svg'}
                alt="VK"
                width={27}
                height={15}
              />
            </Link>
          </div>
        </div>
        <div className={css.rightItems}>
          <div>
            <div>
              <h1>{t('items.project.title')}</h1>
            </div>
            <div>
              <Link href={'/'}>{t('items.project.catalogue')}</Link>
              <Link href={'/'}>{t('items.project.service')}</Link>
              <Link href={'/'}>{t('items.project.privacyPolicy')}</Link>
            </div>
          </div>

          <div>
            <div>
              <h1>{t('items.language.title')}</h1>
            </div>
            <LocaleSwitcher />
          </div>

          <div>
            <div>
              <h1>{t('items.contacts.title')}</h1>
            </div>
            <div>
              <Link href={'/'}>{t('items.contacts.tg')}</Link>
              <Link href={'/'}>{t('items.contacts.mail')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
