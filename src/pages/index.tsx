import Link from 'next/link';
import Layout from '~/components/Layout';
import useAuth from '~/hooks/useAuth';

const Home = () => {
  const { status, signOut } = useAuth();
  return (
    <Layout>
      <div className="text-3xl">
        {status === 'authenticated' ? (
          <span>You are authenticated</span>
        ) : (
          <span>You are not authenticated</span>
        )}
      </div>
      <div className="px-4 py-16">
        {status === 'authenticated' ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <Link href="api/auth/signin">Sign in</Link>
        )}
      </div>
    </Layout>
  );
};

export default Home;
