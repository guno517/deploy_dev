import { useEffect } from 'react';
import apiCreate from '@/Api/api';

const API_URL = {
  USER: {
    GET_USERS: 'api/users/get-users',
  },
};

const Home = () => {
  useEffect(() => {
    const start = async () => {
      try {
        const response = await apiCreate.get(API_URL.USER.GET_USERS);
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
