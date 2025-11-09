import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Home = () => {
  const { name } = use(AuthContext);
  console.log(name);
};

export default Home;
