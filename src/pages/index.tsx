import Layout from '~/components/Layout';
import useAuth from '~/hooks/useAuth';

const Home = () => {
  const { status, signInWithGoogle, signInWithEmail, signOut } = useAuth();
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
          <div>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <button onClick={signInWithEmail}>Sign in with Email</button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
