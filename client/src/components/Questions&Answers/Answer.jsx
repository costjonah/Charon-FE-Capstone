import React from "react";
import moment from "moment";

const Answer = (props) => {
  return (
    <li className="IndAnswer">
      {" "}
      {props.answer.body}{" "}
      {props.answer.photos.map((photo) => console.log(photo))}
      <br />
      <br />
      <span className="AnswerInfo">
        {" "}
        by {props.answer.answerer_name},{" "}
        {moment(props.answer.date).format("MMM Do, YYYY")} &nbsp; | &nbsp;
        helpful?&nbsp;
      </span>
      {props.answer.disablehelpfulness !== true ? (
        <span
          className="AnswerHelpfulButton"
          onClick={(event) => props.helpfulAnswerClick(event, props.answer)}
        >
          Yes
        </span>
      ) : (
        <span className="AnswerHelpfulButton">Yes</span>
      )}
      <span className="AnswerHelpfulCounter">
        ({props.answer.helpfulness}) &nbsp; | &nbsp;{" "}
      </span>
      {props.answer.disablereport !== true ? (
        <span
          className="AnswerReport"
          onClick={(event) => props.reportAnswerClick(event, props.answer)}
        >
          Report
        </span>
      ) : (
        <span className="AnswerReport">Reported</span>
      )}
      <br />
    </li>
  );
};

export default Answer;
