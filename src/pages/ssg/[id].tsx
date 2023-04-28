import Layout from '~/components/Layout';
import { useRouter } from 'next/router';
import { getRandom } from '~/utils';

const SSG = ({ data }: { data: number }) => {
  const { id } = useRouter().query;
  return (
    <Layout>
      <div className="text-8xl">Page with SSG</div>
      <div className="text-7xl">{data}</div>
      <div className="text-6xl">{id}</div>
    </Layout>
  );
};

export const getStaticProps = () => {
  return { props: { data: getRandom(1, 100) } };
};

export const getStaticPaths = () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  };
};

export default SSG;
