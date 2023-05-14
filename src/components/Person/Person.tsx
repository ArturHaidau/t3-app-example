import { type Person as PersonType } from '@prisma/client';
import { useState } from 'react';
import { api } from '~/utils/api';
import PersonForm from '../PersonForm';
import { type PersonWithoutId } from '~/types';

const Person = ({ id, ...data }: PersonType) => {
  const [isEdited, setIsEdited] = useState(false);
  const deletePerson = api.persons.delete.useMutation();
  const updatePerson = api.persons.update.useMutation();

  const handleDelete = () => {
    deletePerson.mutate({ where: { id } });
    alert('Deleted');
  };
  const handleEdit = () => {
    setIsEdited(true);
  };
  const handleEditSubmit = (data: PersonWithoutId) => {
    updatePerson.mutate({ where: { id }, data });
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
            <div>Name: {data.name}</div>
            <div>
              Date of birth: {new Date(data.dateOfBirth).toDateString()}
            </div>
            <div>Height in cm: {data.heightInCm}</div>
          </div>
          <div className="container flex flex-row gap-3 font-bold">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      ) : (
        <PersonForm
          person={data}
          handleSubmit={handleEditSubmit}
          handleCancel={handleEditCancel}
        />
      )}
    </div>
  );
};

export default Person;
