import React from "react";
import Photo from "./Photo.jsx";
import PhotoModal from './PhotoModal.jsx'


const AnswerModal = (props) => {
  return (
   <div className='QuestionAndAnswerFormcontainer'>
    <div className="Modal">
      <h2> Submit Your Answer </h2>
      <h3> {props.productName} {props.question_body}</h3>
      <form >
        <label> *Answer: </label>
        <textarea className={props.answererror} type='text' maxLength='1000' rows='7' cols='40' onChange={props.handleAnswerInput} placeholder='Your Answer Goes Here'>
        </textarea>
        {props.answererror ? <span className='ErrorText'> Enter a valid answer </span> : <></>}
        <br/>
        <label>*Nickname: </label>
        <input className={props.nickerror} type='text' maxLength='60' placeholder='Example: jackson11!' onChange={props.handleNicknameInput} ></input>
        {props.nickerror ? <span className='ErrorText'> Enter a valid nickname </span> : <></>}
        <br/>
        <div>For privacy reasons, do not use your full name or email address</div>
        <label>*Email: </label>
        <input className={props.emailerror} type='text' maxLength='60' placeholder='Example: jackson11!@email.com' onChange={props.handleEmailInput} ></input>
        {props.emailerror ? <span className='ErrorText'> Enter a valid email </span> : <></>}
        <br/>
        <div>For authentication reasons, you will not be emailed</div>
        <label> Photos: </label>
        {props.photos.length < 5 ? (
          <Photo
            photos={props.photos}
            handlePhotoChange={props.handlePhotoChange}
            showPhotoModal={props.showPhotoModal}
            photoclicked={props.photoclicked}
            photo={props.photo}
          />
        ) : (
          props.photos.map((photo, index) => <img key={index} className="AnswerImg" src={photo} onClick={props.showPhotoModal}/>)
        )}
        {props.photoclicked === true ? <PhotoModal photo={props.photo} closePhotoModal={props.closePhotoModal}/> : <></>}
        <br />
        <button type="button" onClick={props.handleSubmit}>
          {" "}
          Submit Answer
        </button>
        <button type="button" onClick={props.closeAnswerModal}>
          {" "}
          Close{" "}
        </button>
      </form>
    </div>
  </div>
  );
};

export default AnswerModal;
