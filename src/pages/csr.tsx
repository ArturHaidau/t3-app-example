import { useState } from 'react';
import Layout from '~/components/Layout';

const CSR = () => {
  const [state, setState] = useState(0);
  return (
    <Layout>
      <div className="text-8xl">Page with CSR</div>
      <div className="text-7xl">{state}</div>
      <button className="text-6xl" onClick={() => setState(state + 1)}>
        Increment
      </button>
    </Layout>
  );
};

export default CSR;
