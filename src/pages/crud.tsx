import { type Person as PersonType } from '@prisma/client';
import { createServerSideHelpers } from '@trpc/react-query/server';
import { type InferGetStaticPropsType } from 'next';
import CreatePerson from '~/components/CreatePerson';
import Layout from '~/components/Layout';
import Person from '~/components/Person';
import { appRouter } from '~/server/api/root';
import { prisma } from '~/server/db';

const REVALIDATE_IN_SECONDS = 3;

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
      ) as PersonType[],
    },
  };
}

const CRUD = ({ persons }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <div className="p-7 text-8xl">Page with CRUD</div>
      <div className="container flex w-fit flex-shrink-0 flex-row flex-wrap gap-8 border-4 border-white p-7">
        {persons.map((x) => (
          <Person key={x.id} {...x} />
        ))}
      </div>
      <CreatePerson />
    </Layout>
  );
};

export default CRUD;
