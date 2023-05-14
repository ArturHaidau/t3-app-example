import { createTRPCRouter } from '~/server/api/trpc';
import persons from './routers/persons';

export const appRouter = createTRPCRouter({
  persons,
});

export type AppRouter = typeof appRouter;
