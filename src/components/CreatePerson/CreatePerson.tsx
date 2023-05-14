import { api } from '~/utils/api';
import PersonForm from '../PersonForm';
import { type Person } from '@prisma/client';

const CreatePerson = () => {
  const createPerson = api.persons.create.useMutation();

  const handleSubmit = (person: Omit<Person, 'id'>) => {
    createPerson.mutate(person);
    alert('Created');
  };

  return (
    <div className="m-4 border-8 border-yellow-300">
      <PersonForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePerson;
