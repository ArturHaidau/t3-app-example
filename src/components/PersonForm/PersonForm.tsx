import { type Person } from '@prisma/client';
import { useForm } from 'react-hook-form';
import styles from './PersonForm.module.css';

interface Form {
  name: string;
  dateOfBirth: string;
  heightInCm: string;
}

interface Props {
  person?: Person;
  handleSubmit: (person: Person) => unknown;
  handleCancel?: () => unknown;
}

const toPerson = (data: Form) => ({
  ...data,
  dateOfBirth: new Date(data.dateOfBirth),
  heightInCm: Number(data.heightInCm),
});

const toDateInput = (date: Date) => date.toString().split('T')[0];

const toFormPerson = (data: Person) => ({
  ...data,
  dateOfBirth: toDateInput(data.dateOfBirth),
  heightInCm: data.heightInCm.toString(),
});

const PersonForm = ({ person, handleSubmit, handleCancel }: Props) => {
  const { register, handleSubmit: useFormHandleSubmit } = useForm<Form>({
    defaultValues: person ? toFormPerson(person) : {},
  });

  const onSubmit = useFormHandleSubmit((data) => {
    handleSubmit({ ...toPerson(data), id: person?.id ?? '' });
  });

  return (
    <form
      onSubmit={onSubmit}
      className="container flex h-full flex-col gap-y-5 bg-orange-600 p-3 text-black"
    >
      <div className="container flex flex-col gap-y-2">
        <div className={styles.item}>
          <label htmlFor="name">Name:</label>
          <input id="name" {...register('name')} required />
        </div>
        <div className={styles.item}>
          <label htmlFor="dateOfBirth">Date of birth:</label>
          <input
            id="dateOfBirth"
            type="date"
            {...register('dateOfBirth')}
            required
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="heightInCm">Height in cm:</label>
          <input
            id="heightInCm"
            type="number"
            {...register('heightInCm')}
            min={1}
            required
          />
        </div>
      </div>
      <div className="container flex flex-auto justify-around font-bold">
        <button type="submit">{person ? 'Edit' : 'Create'}</button>
        {handleCancel && <button onClick={handleCancel}>Cancel</button>}
      </div>
    </form>
  );
};

export default PersonForm;
