'use client';
import { RootState } from '@/shared/redux/store';
import Authorized from './Authorized';
import Unauthorized from './Unauthorized';
import { useSelector } from 'react-redux';

const HeaderLayout = () => {
  const isSignedIn = useSelector((state: RootState) => state.auth.isSignedIn);
  return <>{isSignedIn ? <Authorized /> : <Unauthorized />}</>;
};

export default HeaderLayout;
