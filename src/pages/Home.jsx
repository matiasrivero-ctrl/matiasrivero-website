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

        <CardContainer>
          <CardRow>
            <h1 className="section-title">Projects</h1>
            <Card>
              {!project
                ? 'Loading...'
                : project.map((element) => (
                    <Projects project={element} key={element.id} />
                  ))}
            </Card>
          </CardRow>
        </CardContainer>
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

const CardContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 1rem;
`;

const CardRow = styled.div`
  width: 100%;

  max-width: 1240px;

  .section-title {
    text-transform: uppercase;
    padding: 0 0 1rem 0;
  }
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  ); /* see notes below */
  grid-auto-rows: auto;
  column-gap: 2rem;
  row-gap: 2rem;
`;
