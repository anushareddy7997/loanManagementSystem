import React from 'react';
import { useLocation, useNavigation,Link } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  return (
    <div className='homepage'>
      <Link to="/">Sign Out</Link>
      <h1>hello {location.state.id} and welcome to homepage</h1>

    </div>
  )
}

export default Home