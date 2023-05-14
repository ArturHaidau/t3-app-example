import { type PersonWithoutId } from '~/types';
import { api } from '~/utils/api';
import PersonForm from '../PersonForm';

const CreatePerson = () => {
  const createPerson = api.persons.create.useMutation();

  const handleSubmit = (person: PersonWithoutId) => {
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
