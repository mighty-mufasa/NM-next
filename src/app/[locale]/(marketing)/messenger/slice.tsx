'use client';
import css from './messenger.module.scss';

import { dialoguesItems } from './dialoguesItems';
import SenderCard from './_components/senderCard/senderCard';
import Support from './_components/support/Support';

import Page from '@/shared/containers/page';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function MessengerSlice({ children }: Props): JSX.Element {
  const [activeChatId, setActiveChatId] = useState<string | null>(null);

  const handleSetActiveChat = (chatId: string) => {
    setActiveChatId(chatId);
  };
  return (
    <Page padding>
      <div className={css.wrapper}>
        <div className={css.chats}>
          {dialoguesItems.map((item, index) => (
            <SenderCard
              key={index}
              name={item.name}
              avatar={item.avatar}
              lastMessage={item.message}
              idChat={item.chatId}
              isActive={item.chatId === activeChatId}
              onClick={() => handleSetActiveChat(item.chatId)}
            />
          ))}
          <Support />
        </div>
        <div className={css.dialogues}>{children}</div>
      </div>
    </Page>
  );
}
