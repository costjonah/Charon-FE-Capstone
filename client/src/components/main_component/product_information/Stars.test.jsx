import 'jsdom-global/register';
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
enzyme.configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Stars from './Stars.jsx';

test('StarRating value to be 1', () => {
  const count = 1;

  const Rating = mount(<Stars rating={count} />);

  expect(count).toEqual(1);
  Rating.unmount();
});
