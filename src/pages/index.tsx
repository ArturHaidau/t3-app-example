import Layout from '~/components/Layout';
import useAuth from '~/hooks/useAuth';

const Home = () => {
  const { status, signInWithGoogle, signOut } = useAuth();
  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 text-8xl">
        Hello, World!
      </div>
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
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        )}
      </div>
    </Layout>
  );
};

export default Home;
