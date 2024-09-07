// src/App.tsx
import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import PersonalDetailsForm from './components/PersonalDetailsForm';
import AddressForm from './components/AddressForm';
import ProfilePictureForm from './components/ProfilePictureForm';
import ReviewForm from './components/ReviewForm';
import './App.css';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    phone: '',
    birthDate: '',
    gender: '',
    country: '',
    district: '',
    municipality: '',
    city: '',
    ward: '',
    profilePicture: '',
  });

  const handleNext = (newData: any) => {
    setFormData({ ...formData, ...newData });
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log('Final Data Submitted:', formData);
    alert('Form submitted successfully!');
    // Add any further form submission logic (e.g., API call)
  };

  return (
    <div className="App">
      <h1>Register</h1>
      <ProgressBar currentStep={currentStep} />
      {currentStep === 1 && <PersonalDetailsForm handleNext={handleNext} />}
      {currentStep === 2 && <AddressForm handleNext={handleNext} handleBack={handleBack} />}
      {currentStep === 3 && <ProfilePictureForm handleNext={handleNext} handleBack={handleBack} />}
      {currentStep === 4 && <ReviewForm formData={formData} handleBack={handleBack} handleSubmit={handleSubmit} />}
    </div>
  );
};

export default App;
