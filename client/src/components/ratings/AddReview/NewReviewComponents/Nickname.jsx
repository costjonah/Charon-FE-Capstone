import React from 'react';

const Nickname = ({ nickname, handleChange }) => {
  let maxLengthWarning = null;
  if (nickname.length >= 60) {
    maxLengthWarning = <div>Maximum Length Reached</div>;
  }
  return (
    <div>
      <label>
        <div>Nickname</div>
        <input
          type='text'
          maxLength={60}
          name='Nickname'
          value={nickname}
          onChange={handleChange}
          placeholder='Example: jackson11!'
        />
        {maxLengthWarning}
      </label>
      <div>For privacy reasons, do not use your full name or email address</div>
    </div>
  );
};

export default Nickname;
