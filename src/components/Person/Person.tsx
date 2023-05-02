import { type Person } from '@prisma/client';
import { api } from '~/utils/api';

const Person = ({ id, name, dateOfBirth, heightInCm }: Person) => {
  const mutation = api.persons.delete.useMutation();
  const handleDelete = () => {
    mutation.mutate({ where: { id } });
    alert('Deleted');
  };
  return (
    <div
      className="container flex flex-col
    "
    >
      <div>{name}</div>
      <div>{dateOfBirth.toString()}</div>
      <div>{heightInCm}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Person;
