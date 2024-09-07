// src/components/ProgressBar.tsx
import React from 'react';

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  const totalSteps = 4;
  return (
    <div className="progress-bar">
      {[...Array(totalSteps)].map((_, index) => (
        <div key={index} className={`step ${index + 1 <= currentStep ? 'completed' : ''}`}>
          <span>{index + 1}</span>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
