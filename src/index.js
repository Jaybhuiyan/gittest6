import React from 'react';
import ReactDOM from 'react-dom';
import App from "./component/App";

const MainApp = () => {
  return (
    <div>      
      <App />    
    </div>
  );
}

ReactDOM.render(
  <MainApp />,
  document.querySelector('#root')
);
