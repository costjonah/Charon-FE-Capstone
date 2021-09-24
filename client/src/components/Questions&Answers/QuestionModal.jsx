import React from "react";

const QuestionModal = (props) => {
  return (
    <div className="Modal">
      <h2> Ask Your Question</h2>
      <h3> About the product {props.productName}</h3>
      <form >
        <label>*Question: </label>
        <textarea className={props.questionerror} type='text' maxLength='1000' rows='7' cols='40' onChange={props.handleQuestionInput} placeholder='Your Question Goes Here' required></textarea>
        {props.questionerror ? <span className='ErrorText'> Enter a valid question </span> : <></>}
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
        <button type="button" onClick={props.handleSubmit}>
          {" "}
          Submit Question{" "}
        </button>
        <button type="button" onClick={props.closeModal}>
          Close
        </button>
      </form>
    </div>
  );
};

export default QuestionModal;
