import Layout from '~/components/Layout';
import { getRandom } from '~/utils';

const SSR = ({ data }: { data: number }) => (
  <Layout>
    <div className="text-8xl">Page with SSR</div>
    <div className="text-7xl">{data}</div>
  </Layout>
);

export const getServerSideProps = () => {
  return { props: { data: getRandom(1, 100) } };
};

export default SSR;
