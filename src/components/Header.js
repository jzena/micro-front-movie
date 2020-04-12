import React from "react";
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="App-header">
      <Link to="/"><h2>{ props.text }</h2></Link>
      {/* <Link to="/movie/1"><h2>Detail</h2></Link> */}
    </header>
  );
};

export default Header;