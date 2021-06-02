import React from 'react';
import money from "./money.gif"
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
      <h1>IT HAPPENED.</h1>
      <h4>You put your life savings into crypto.</h4>
      <h4>The market took off. Now you're filthy rich.</h4>
      <img src={money}/>
      <h4>You left your career in the custodial arts to become a <em>fine</em> art collector.</h4>
      <h5>(Art is an appreciating asset; you're a smart investor.)</h5>
      <h4>The Art Institute of Chicago opens its doors to you, Moneybags McGee.</h4>
      <h4>Come in. Peruse the gallery. Purchase what you please.</h4>
      <Link to="/artworks" className="btn btn-primary">Step in to the gallery</Link>
    </div>
  ); 

  export default Home;
  