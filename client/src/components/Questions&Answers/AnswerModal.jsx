import React from 'react';
import Photo from './Photo.jsx';

const AnswerModal = (props) => {
  return (
    <div className='Modal'>
      <h2> Submit Your Answer </h2>
      <h3>
        {' '}
        {props.productName} : {props.question_body}
      </h3>
      <form>
        <label> *Answer: </label>
        <textarea
          type='text'
          maxLength='1000'
          rows='7'
          cols='40'
          onChange={props.handleAnswerInput}
          placeholder='Your Answer Goes Here'
        ></textarea>
        <br />
        <label>*Nickname: </label>
        <input
          type='text'
          maxLength='60'
          placeholder='Example: jackson11!'
          onChange={props.handleNicknameInput}
        ></input>
        <div>
          For privacy reasons, do not use your full name or email address
        </div>
        <label>*Email: </label>
        <input
          type='text'
          maxLength='60'
          placeholder='Example: jackson11!@email.com'
          onChange={props.handleEmailInput}
        ></input>
        <div>For authentication reasons, you will not be emailed</div>
        <label> Photos: </label>
        {/* {props.photo === true ? <Photo /> : <button type='button' onClick={props.showPhotoModal}> test </button>} */}
        {props.photos.length < 5 ? (
          <Photo
            photos={props.photos}
            handlePhotoChange={props.handlePhotoChange}
          />
        ) : (
          props.photos.map((photo) => <img className='AnswerImg' src={photo} />)
        )}
        <br />
        <button type='button' onClick={props.handleSubmit}>
          {' '}
          Submit Answer
        </button>
        <button type='button' onClick={props.closeAnswerModal}>
          {' '}
          Close{' '}
        </button>
      </form>
    </div>
  );
};

export default AnswerModal;
