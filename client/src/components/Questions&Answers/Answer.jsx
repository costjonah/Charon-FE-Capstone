import React from "react";
import moment from "moment";
import PhotoModal from './PhotoModal.jsx'

const Answer = (props) => {
  return (
    <li className='IndAnswer'> {props.answer.body} <br/>{props.answer.photos.map((photo, index) =>
    <img key={index} className='AnswerImg' src={(photo)} onClick={props.showPhotoModal}/>
    )}
    {props.photoclicked === true ? <PhotoModal photo={props.photo} closePhotoModal={props.closePhotoModal}/> : <></>}
    <br/>
    <br/>
    <span className='AnswerInfo'> by {props.answer.answerer_name}, {moment(props.answer.date).format('MMM Do, YYYY')} &nbsp; | &nbsp; helpful?&nbsp;
    </span>
    {props.answer.disablehelpfulness !== true ?
    <span className='AnswerHelpfulButton' onClick={(event) => props.helpfulAnswerClick(event, props.answer)}>Yes</span> : <span className='AnswerHelpfulButton'>Yes</span>}
    <span className='AnswerHelpfulCounter'>({props.answer.helpfulness}) &nbsp; | &nbsp; </span>

    {props.answer.disablereport !== true ?
    <span className='AnswerReport' onClick={(event) => props.reportAnswerClick(event, props.answer)}>Report</span>
    :
    <span className='AnswerReport'>Reported</span>
    }
    <br/>
    </li>
  );
};

export default Answer;
