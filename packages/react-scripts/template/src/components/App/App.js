import React from 'react';
import PropTypes from 'prop-types';

const newNumber = () => Math.floor(Math.random() * 100);

const App = ({ number, onClick }) => (
  <div>
    <header>
      <h1>Welcome to Main Navbar UI</h1>
    </header>
    <p>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <p>
      <button onClick={() => onClick(newNumber())}>Click me!</button>
      Number: {number}
    </p>
  </div>
);

App.propTypes = {
  number: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default App;
