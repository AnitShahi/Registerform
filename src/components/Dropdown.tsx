// src/components/Dropdown.tsx

import React from 'react';
import { useFormContext } from 'react-hook-form';

interface DropdownProps {
  label: string;
  name: string;
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, name, options }) => {
  const { register } = useFormContext();

  return (
    <div className="form-group">
      <label>{label}</label>
      <select {...register(name, { required: true })}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
