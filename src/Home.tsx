import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Mirëseardhje</h1>
      <p>Kjo është faqja kryesore</p>
      <Link to="/contact">
        <button>Shko te Contact Us</button>
      </Link>
    </div>
  );
};

export default Home;