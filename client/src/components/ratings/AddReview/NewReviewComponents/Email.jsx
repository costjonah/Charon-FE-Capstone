import React from 'react';

const Email = ({ email, handleChange }) => {
  let maxLengthWarning = null;
  if (email.length >= 60) {
    maxLengthWarning = <div>Maximum Length Reached</div>;
  }
  return (
    <div>
      <label>
        <div>Email</div>
        <input
          type='text'
          maxLength={60}
          name='Email'
          value={email}
          onChange={handleChange}
          placeholder='Example: jackson11@email.com'
        />
        {maxLengthWarning}
      </label>
      <div>For authentication reasons, you will not be emailed</div>
    </div>
  );
};

export default Email;
