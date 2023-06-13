import { signOut as _signOut, useSession } from 'next-auth/react';
import { useMemo } from 'react';

const useAuth = () => {
  const { status: sessionStatus } = useSession();

  const signOut = async () => {
    await _signOut({ redirect: false });
  };

  const status = useMemo(() => sessionStatus, [sessionStatus]);

  return { status, signOut };
};

export default useAuth;
