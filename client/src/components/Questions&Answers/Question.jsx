import React from "react";
import AnswersList from "./AnswersList.jsx";
import AddAnswer from "./AddAnswer.jsx";

const Question = (props) => {
  return (
    <div>
      <div className="Question">
        {" "}
        Q: {props.question.question_body}
        <span className="HelpfulText"> Helpful? </span>
        {props.question.disablehelpfulness !== true ? (
          <span
            className="HelpfulButton"
            onClick={(event) =>
              props.helpfulQuestionClick(event, props.question)
            }
          >
            Yes
          </span>
        ) : (
          <span className="HelpfulButtonClicked">Yes</span>
        )}
        <span className="HelpfulCounter">
          ({props.question.question_helpfulness})
        </span>
        <span className="Divider">&nbsp; | &nbsp;</span>
        {/* <span> Add Answer </span> */}
        <AddAnswer
          productName={props.productName}
          question_body={props.question.question_body}
          question_id={props.question.question_id}
        />
      </div>
      <div>
        <AnswersList
          answers={props.question.answers}
          getAllQuestions={props.getAllQuestions}
        />
      </div>
    </div>
  );
};

export default Question;
