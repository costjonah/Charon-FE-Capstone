import React from 'react';

const Summary = ({ summary, handleChange }) => {
  let maxLengthWarning = null;
  if (summary.length >= 60) {
    maxLengthWarning = <div>Maximum Length Reached</div>;
  }
  return (
    <div>
      <label>
        <div>Summary</div>
        {maxLengthWarning}
        <textarea
          maxLength={60}
          name='Review Summary'
          value={summary}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Summary;
