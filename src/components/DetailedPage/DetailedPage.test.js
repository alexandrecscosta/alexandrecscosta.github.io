import React from 'react';
import ReactDOM from 'react-dom';
import DetailedPage from './DetailedPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DetailedPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});