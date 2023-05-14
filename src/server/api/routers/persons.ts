import {
  PersonCreateInputObjectSchema,
  PersonDeleteOneSchema,
  PersonUpdateOneSchema,
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
  update: publicProcedure
    .input(PersonUpdateOneSchema)
    .mutation(({ ctx, input: { data, where } }) =>
      ctx.prisma.person.update({ data, where })
    ),
});

export default router;
