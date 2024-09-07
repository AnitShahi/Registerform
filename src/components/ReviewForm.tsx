// src/components/ReviewForm.tsx
import React from 'react';

interface ReviewFormProps {
  formData: any;
  handleBack: () => void;
  handleSubmit: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ formData, handleBack, handleSubmit }) => {
  return (
    <div className="form-container">
      <h2>Review Your Details</h2>
      <div>
        <strong>Personal Details</strong>
        <p>First Name: {formData.firstName}</p>
        <p>Middle Name: {formData.middleName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Phone: {formData.phone}</p>
        <p>Birth Date: {formData.birthDate}</p>
        <p>Gender: {formData.gender}</p>
      </div>
      <div>
        <strong>Address</strong>
        <p>Country: {formData.country}</p>
        <p>District: {formData.district}</p>
        <p>Municipality: {formData.municipality}</p>
        <p>City: {formData.city}</p>
        <p>Ward: {formData.ward}</p>
      </div>
      <img src={formData.profilePicture} alt="Profile" />
      <button type="button" onClick={handleBack}>Back</button>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ReviewForm;
