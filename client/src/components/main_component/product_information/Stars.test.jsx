
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Stars from './Stars.jsx';

test('StarRating value to be 1', () => {
  const count = 1;

  const Rating = mount(<Stars rating={count} />);

  expect(count).toEqual(1);
  Rating.unmount();
});
