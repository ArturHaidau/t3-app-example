import Layout from '~/components/Layout';

const SSR = ({ data }: { data: number }) => (
  <Layout>
    <div className="text-center text-8xl">Page with SSR</div>
    <div className="text-center text-7xl">{data}</div>
  </Layout>
);

export const getServerSideProps = () => {
  return { props: { data: Math.round(Math.random() * 100) + 1 } };
};

export default SSR;
