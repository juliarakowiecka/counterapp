import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {render} from '@testing-library/react'
import App from './App';


it('renders without crashing', () => {
  shallow(<App />);
});

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  })
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<App />)
    expect(asFragment(<App />)).toMatchSnapshot()
});
