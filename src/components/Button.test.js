import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Button from '../components/Button';
import { render, cleanup } from  '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('renders without crashing', () => {
  shallow(<Button />);
});

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
  })






