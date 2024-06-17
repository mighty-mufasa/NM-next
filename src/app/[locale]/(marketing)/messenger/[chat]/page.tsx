import css from './page.module.scss';

import { Input } from '@/shared/ui/input';
import Message from '../_components/dialogue/message/message';
import { useTranslations } from 'next-intl';

export default function Chat(): JSX.Element {
  const t = useTranslations('messenger.chat');

  return (
    <div className={css.wrapper}>
      <div className={css.messages}>
        <Message isMine={true} />
        <Message isMine={false} />
        <Message isMine={true} />
        <Message isMine={false} />
        <Message isMine={true} />
        <Message isMine={false} />
        <Message isMine={true} />
        <Message isMine={false} />
      </div>
      <Input className={css.inputMessage} placeholder={t('inputPlaceholder')} />
    </div>
  );
}
