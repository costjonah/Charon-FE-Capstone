import React from 'react';

const ReviewDate = (props) => {
  const d = new Date(props.reviewDate);
  var dateString = `${d.toLocaleString('default', {
    month: 'long',
  })} ${d.getDate()}, ${d.getFullYear()}`;

  return <span>{dateString}</span>;
};

export default ReviewDate;
