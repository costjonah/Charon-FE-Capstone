import React from 'react';
import { shallow } from 'enzyme';
import App from './App.jsx';
import Navbar from "../components/common/Navigation.jsx";
import Overview from "../components/main_component/Overview.jsx";

describe('App', () => {
  let applicationBody;

  beforeAll(() => {
    applicationBody = shallow(<App />);
  });

  test('App contains `Project Catwalk`', () => {
    console.log(applicationBody.debug());
    expect(applicationBody.contains('Project Catwalk')).toBe(true);
  });

  test('renders top Navigation Bar', () => {
    const doesRender = applicationBody.find(Navbar);
    expect(doesRender).toHaveLength(1);
  });

  test('renders Main Component', () => {
    const doesRender = applicationBody.find(Overview);
    expect(doesRender).toHaveLength(1);
  });
});

