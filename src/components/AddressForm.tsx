// src/components/AddressForm.tsx
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Dropdown from './Dropdown';


const provinces = ['Province 1', 'Province 2', 'Province 3'];
const districts = ['Kathmandu', 'Bhaktapur', 'Lalitpur'];
const municipalities = ['Municipality 1', 'Municipality 2'];

interface AddressFormProps {
  handleNext: (data: any) => void;
  handleBack: () => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ handleNext, handleBack }) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    handleNext(data); // Proceed to the next step
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="form-container">
        <h2>Address</h2>
        <Dropdown label="Province" name="province" options={provinces} />
        <Dropdown label="District" name="district" options={districts} />
        <Dropdown label="Municipality" name="municipality" options={municipalities} />
        <input {...methods.register('city')} placeholder="City" />
        <input {...methods.register('ward')} placeholder="Ward" />
        <button type="button" onClick={handleBack}>Back</button>
        <button type="submit">Next</button>
      </form>
    </FormProvider>
  );
};

export default AddressForm;
