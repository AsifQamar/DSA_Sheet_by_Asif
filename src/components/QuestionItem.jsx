import React, { useState } from 'react';

const QuestionItem = ({ question }) => {
  // 1. Initialize state by checking localStorage first
  const [isChecked, setIsChecked] = useState(() => {
    // Use question.id if available, otherwise fallback to the problem name/title
    const uniqueKey = question.id || question.Problem || question.Title;
    const savedStatus = localStorage.getItem(`question_${uniqueKey}`);
    return savedStatus === 'true'; 
  });

  // 2. Update state and localStorage when the checkbox is clicked
  const handleToggle = (e) => {
    const newStatus = e.target.checked;
    setIsChecked(newStatus);
    
    const uniqueKey = question.id || question.Problem || question.Title;
    localStorage.setItem(`question_${uniqueKey}`, newStatus);
  };

  return (
    <div className="question-item">
      <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleToggle} 
        />
        
        {/* Displays the question name and links to the problem */}
        <a 
          href={question.URL || question.Link || '#'} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            textDecoration: isChecked ? 'line-through' : 'none',
            color: isChecked ? 'gray' : 'inherit'
          }}
        >
          {question.Problem || question.Title || 'Unknown Question'}
        </a>
      </label>
    </div>
  );
};

export default QuestionItem;
