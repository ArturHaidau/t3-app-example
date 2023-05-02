import { type Person } from '@prisma/client';
import { createServerSideHelpers } from '@trpc/react-query/server';
import { type InferGetStaticPropsType } from 'next';
import Layout from '~/components/Layout';
import PersonCmp from '~/components/Person';
import { appRouter } from '~/server/api/root';
import { prisma } from '~/server/db';
import { api } from '~/utils/api';

const REVALIDATE_IN_SECONDS = 10;

export async function getStaticProps() {
  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: { prisma },
  });
  return {
    revalidate: REVALIDATE_IN_SECONDS,
    props: {
      persons: JSON.parse(
        JSON.stringify(await helpers.persons.getAll.fetch())
      ) as Person[],
    },
  };
}

const CRUD = ({ persons }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const mutation = api.persons.create.useMutation();
  const handleCreate = () => {
    mutation.mutate({
      name: 'asd',
      heightInCm: 545,
      dateOfBirth: new Date('1999-11-30'),
    });
    alert('Created');
  };

  return (
    <Layout>
      <div className="text-8xl">Page with CRUD</div>
      <div>
        {persons.map((x) => (
          <PersonCmp key={x.id} {...x} />
        ))}
      </div>
      <button onClick={handleCreate}>Create</button>
    </Layout>
  );
};

export default CRUD;
