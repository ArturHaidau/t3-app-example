import { type Person } from '@prisma/client';

export type PersonWithoutId = Omit<Person, 'id'>;
