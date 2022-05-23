import React from 'react';
import ReactDOM from 'react-dom';
import IntroductionBoxComponent from './IntroductionBoxComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IntroductionBoxComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});