import { useEffect, useState } from 'react';
import axios from 'axios';

import { Header, Banner, About } from '../components';
function Home() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (!userData) {
      const fetchData = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}`);
        const { data } = response.data;
        await setUserData(data);
      };

      // fetchData();
    }
  }, []);

  return (
    <>
      <Banner />
      <Header />
      {!userData
        ? null
        : userData.map((item) => (
            <>
              <h1 key={item.id}>{item.attributes.title}</h1>
              <p>{item.attributes.description}</p>
              <a href="#code">{item.attributes.code}</a>
            </>
          ))}
    </>
  );
}

export default Home;
