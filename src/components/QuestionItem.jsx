import React, { useState } from 'react';

const QuestionItem = ({ question }) => {
  // Use the unique _id from your JSON to save the check status
  const [isChecked, setIsChecked] = useState(() => {
    const savedStatus = localStorage.getItem(`question_${question._id}`);
    return savedStatus === 'true'; 
  });

  // Update state and localStorage when clicked
  const handleToggle = (e) => {
    const newStatus = e.target.checked;
    setIsChecked(newStatus);
    localStorage.setItem(`question_${question._id}`, newStatus);
  };

  // Safely extract the problem name and URL based on your JSON structure
  const problemName = question.title || (question.questionId && question.questionId.name) || 'Unknown Question';
  const problemUrl = (question.questionId && question.questionId.problemUrl) || '#';

  return (
    <div className="question-item">
      <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleToggle} 
        />
        
        <a 
          href={problemUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            textDecoration: isChecked ? 'line-through' : 'none',
            color: isChecked ? 'gray' : 'inherit'
          }}
        >
          {problemName}
        </a>
      </label>
    </div>
  );
};

export default QuestionItem;
