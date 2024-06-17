import MessengerSlice from './slice';

export default function MessengerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MessengerSlice>{children}</MessengerSlice>;
}
