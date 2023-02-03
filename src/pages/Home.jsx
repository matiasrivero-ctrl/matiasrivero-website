import { useState, useEffect } from 'react';

// Components
import { Navbar, Projects, About } from '../components';

// Libraries
import axios from 'axios';
import styled from 'styled-components';

// Layout
import { Background } from '../layouts';

function Home() {
  const [project, setProject] = useState();

  useEffect(() => {
    if (!project) {
      const fetchData = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}`);
        const { data } = response.data;
        await setProject(data);
      };

      fetchData();
    }
  }, []);

  return (
    <>
      <Container>
        <Background />
        <About />
        {!project
          ? 'Loading...'
          : project.map((element) => (
              <Projects project={element} key={element.id} />
            ))}
      </Container>
      <Navbar />
    </>
  );
}

export default Home;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  margin: 0;
  padding: 0;

  position: absolute;

  z-index: -1;
`;
