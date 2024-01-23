import React from 'react';
import ReactDOM from 'react-dom/client';
import HooksEx2 from './HooksEx2'
import HooksEx from './HooksEx'
import UsestateWithObj from './UsestateWithObj'
import Spread from './Spread'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HooksEx/>
    <HooksEx2/>
    <UsestateWithObj/>
    <Spread/>
  </>
);

