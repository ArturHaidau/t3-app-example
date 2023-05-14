import { type Person as PersonType } from '@prisma/client';
import { useState } from 'react';
import { api } from '~/utils/api';
import PersonForm from '../PersonForm';

const Person = (person: PersonType) => {
  const [isEdited, setIsEdited] = useState(false);
  const deletePerson = api.persons.delete.useMutation();
  const updatePerson = api.persons.update.useMutation();

  const handleDelete = () => {
    deletePerson.mutate({ where: { id: person.id } });
    alert('Deleted');
  };
  const handleEdit = () => {
    setIsEdited(true);
  };
  const handleEditSubmit = ({ id, ...rest }: PersonType) => {
    updatePerson.mutate({ where: { id }, data: rest });
    alert('Edited');
    setIsEdited(false);
  };
  const handleEditCancel = () => {
    setIsEdited(false);
  };

  return (
    <div className="border-2 border-white">
      {!isEdited ? (
        <div className="container flex w-80 flex-col gap-2 p-2">
          <div>
            <div>Name: {person.name}</div>
            <div>
              Date of birth: {new Date(person.dateOfBirth).toDateString()}
            </div>
            <div>Height in cm: {person.heightInCm}</div>
          </div>
          <div className="container flex flex-row gap-3 font-bold">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      ) : (
        <PersonForm
          person={person}
          handleSubmit={handleEditSubmit}
          handleCancel={handleEditCancel}
        />
      )}
    </div>
  );
};

export default Person;
