import React from "react";
import styled from "styled-components";

const TEMPPRODUCTS = (props) => {
  return (
    <StylesTEMPS>
      {props.products.map((prod) => {
        return (
          <TEMPPRODUCT
            product={prod}
            key={prod.id}
            selectProduct={props.selectProduct}
          />
        );
      })}
    </StylesTEMPS>
  );
};

const TEMPPRODUCT = (props) => {
  const handleClick = (event) => {
    // console.log('Selected: ', event.target.id);
    props.selectProduct(event.target.id);
  };

  return (
    <StyledTEMP>
      <button onClick={handleClick} id={props.product.id}>
        {props.product.name}
      </button>
    </StyledTEMP>
  );
};

const StylesTEMPS = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const StyledTEMP = styled.li`
  list-style-type: none;
  padding-inline-start: 0;

  margin: 0;
  padding: 0;

  .submitButton,
  button {
    cursor: pointer;
    background-color: rgb(34, 34, 34);
    border: none;
    color: #faf9f8;
    border-radius: 3.5px;
    height: 50px;
    margin: 5px 0;
  }
`;

export default TEMPPRODUCTS;
