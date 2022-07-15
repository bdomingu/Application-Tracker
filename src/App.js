import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import './App.css';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <Login></Login>
      {/* <Register></Register> */}
    </div>
  );
}

export default App;
