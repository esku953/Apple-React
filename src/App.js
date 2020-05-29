import React from 'react';
import logo from './logo.svg';
import './css/bootstrap.css';
import './css/styles.css';
import Nav from './Componenets/Nav/Nav.js'
import Footer from './Componenets/Footer/Footer.js'
import Main from './Componenets/Main/Main.js'
function App() {
  return (
  	<div>
		  	<Nav />
		  	<Main />
		  	<Footer />
  	</div>
  );
}

export default App;
