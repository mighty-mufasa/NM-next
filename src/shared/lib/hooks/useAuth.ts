import { useSelector, useDispatch } from 'react-redux';
import { setAuthInfo, selectAuth } from '@/shared/redux/slices/authSlice';
import { UserData } from '../localstorage';
import { AppDispatch } from '@/shared/redux/store';

export function useAuth() {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector(selectAuth);

  const updateAuthInfo = (user: UserData | null, isSignedIn: boolean) => {
    dispatch(setAuthInfo({ user, isSignedIn }));
  };

  return { ...auth, updateAuthInfo };
}