import { signIn, signOut as _signOut, useSession } from 'next-auth/react';
import { useMemo } from 'react';

const useAuth = () => {
  const { status: sessionStatus } = useSession();

  const signInWithGoogle = async () => {
    await signIn('google');
  };

  const signOut = async () => {
    await _signOut({ redirect: false });
  };

  const status = useMemo(() => sessionStatus, [sessionStatus]);

  return { status, signInWithGoogle, signOut };
};

export default useAuth;
