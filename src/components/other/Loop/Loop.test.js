import React from 'react';
import ReactDOM from 'react-dom';
import Loop from './Loop';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loop />, div);
  ReactDOM.unmountComponentAtNode(div);
});
