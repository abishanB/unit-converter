import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
function App() {
  return (
    <body style={{
      width: '1950px',
      height: '950px',
      //backgroundColor: '#dddddf',
    }}>
      <div className='heading'>
        <h1 >Units Converter</h1>
      </div>
      <Wrapper />
    </body>
  );
}

export default App;
