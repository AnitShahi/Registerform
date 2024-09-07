// src/components/PersonalDetailsForm.tsx
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

interface PersonalDetailsProps {
  handleNext: (data: any) => void;
}

const schema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  phone: z.string().min(10, 'Phone number is required'),
  birthDate: z.string().min(1, 'Birth Date is required'),
  gender: z.enum(['Male', 'Female', 'Others']),
});

const PersonalDetailsForm: React.FC<PersonalDetailsProps> = ({ handleNext }) => {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    handleNext(data); // Pass form data to parent and proceed to next step
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="form-container">
        <h2>Personal Details</h2>
        <input {...methods.register('firstName')} placeholder="First Name" />
        <input {...methods.register('middleName')} placeholder="Middle Name" />
        <input {...methods.register('lastName')} placeholder="Last Name" />
        <input {...methods.register('phone')} placeholder="Phone" />
        <input type="date" {...methods.register('birthDate')} placeholder="Birth Date" />
        <div>
        <label>Gender</label>
          <label>
            <input {...methods.register('gender')} type="radio" value="Male" /> Male
          </label>
          <label>
            <input {...methods.register('gender')} type="radio" value="Female" /> Female
          </label>
          <label>
            <input {...methods.register('gender')} type="radio" value="Others" /> Others
          </label>
        </div>
        <button type="submit">Next</button>
      </form>
    </FormProvider>
  );
};

export default PersonalDetailsForm;
