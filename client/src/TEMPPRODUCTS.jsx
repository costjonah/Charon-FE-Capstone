import React from 'react';

const TEMPPRODUCTS = (props) => {
  return (
    <ul>
      {props.products.map((prod) => {
        return (
          <TEMPPRODUCT
            product={prod}
            key={prod.id}
            selectProduct={props.selectProduct}
          />
        );
      })}
    </ul>
  );
};

const TEMPPRODUCT = (props) => {
  const handleClick = (event) => {
    console.log('Selected: ', event.target.id);
    props.selectProduct(event.target.id);
  };

  return (
    <li>
      <button onClick={handleClick} id={props.product.id}>
        {props.product.name}
      </button>
    </li>
  );
};

export default TEMPPRODUCTS;
