import React from 'react';
import styled from 'styled-components';

const Helpfulness = (props) => {
  const handleHelpfulClick = () => {
    props.helpful(props.id);
  };

  const handleReportClick = () => {
    props.report(props.id);
  };

  return (
    <div>
      <div>Was this review helpful?</div>
      <StyledLinks>
        <div onClick={handleHelpfulClick} className='link'>
          Yes ({props.helpfulness})
        </div>
        <div> | </div>
        <div onClick={handleReportClick} className='link'>
          Report
        </div>
      </StyledLinks>
    </div>
  );
};

const StyledLinks = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default Helpfulness;
