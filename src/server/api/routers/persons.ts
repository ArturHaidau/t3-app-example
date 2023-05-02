import {
  PersonCreateInputObjectSchema,
  PersonDeleteOneSchema,
} from 'prisma/generated/schemas';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

const router = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => ctx.prisma.person.findMany()),
  create: publicProcedure
    .input(PersonCreateInputObjectSchema)
    .mutation(({ input, ctx }) => ctx.prisma.person.create({ data: input })),
  delete: publicProcedure
    .input(PersonDeleteOneSchema)
    .mutation(({ ctx, input: { where } }) =>
      ctx.prisma.person.delete({ where })
    ),
});

export default router;
