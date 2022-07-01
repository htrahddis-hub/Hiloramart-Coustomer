// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import axios from 'axios';

// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// axios.defaults.baseURL = 'https://hiloramart.herokuapp.com/';

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
