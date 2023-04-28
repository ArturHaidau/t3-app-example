import Layout from '~/components/Layout';
import { getRandom } from '~/utils';

const REVALIDATE_IN_SECONDS = 5;

const ISR = ({ data }: { data: number }) => (
  <Layout>
    <div className="text-8xl">Page with ISR</div>
    <div className="text-7xl">{data}</div>
    <div className="text-2xl">
      Revalidating in {REVALIDATE_IN_SECONDS} seconds
    </div>
  </Layout>
);

export const getStaticProps = () => {
  return {
    props: { data: getRandom(1, 100) },
    revalidate: REVALIDATE_IN_SECONDS,
  };
};

export default ISR;
