// src/components/ProfilePictureForm.tsx
import React, { useState } from 'react';

interface ProfilePictureFormProps {
  handleNext: (data: any) => void;
  handleBack: () => void;
}

const ProfilePictureForm: React.FC<ProfilePictureFormProps> = ({ handleNext, handleBack }) => {
  const [profilePicture, setProfilePicture] = useState('');

  const onSubmit = () => {
    handleNext({ profilePicture });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = URL.createObjectURL(e.target.files[0]);
      setProfilePicture(file);
    }
  };

  return (
    <div className="form-container">
      <h2>Set Your Profile Picture</h2>
      <input type="file" onChange={handleImageUpload} />
      {profilePicture && <img src={profilePicture} alt="Profile" />}
      <button type="button" onClick={handleBack}>Back</button>
      <button type="button" onClick={onSubmit}>Next</button>
    </div>
  );
};

export default ProfilePictureForm;
