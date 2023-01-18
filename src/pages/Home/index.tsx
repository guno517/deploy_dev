import { useEffect } from 'react';
import api from '@/Api/api';

const API_URL = {
  USER: {
    // GET_USERS: 'api/users/get-users',
    GET_USERS: '/users/get-users',
  },
};

const Home = () => {
  useEffect(() => {
    const start = async () => {
      try {
        const response = await api.get(`/users/get-users`);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    start();
  }, []);

  return (
    <>
      <div>test</div>
    </>
  );
};

export default Home;
