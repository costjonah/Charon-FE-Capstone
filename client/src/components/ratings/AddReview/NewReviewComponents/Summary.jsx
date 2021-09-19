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
        <textarea
          maxLength={60}
          name='Review Summary'
          value={summary}
          onChange={handleChange}
          placeholder='Example: Best purchase ever!'
        />
        {maxLengthWarning}
      </label>
    </div>
  );
};

export default Summary;
