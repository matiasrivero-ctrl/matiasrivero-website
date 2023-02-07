import styled from 'styled-components';

import { Skills, Story } from '../../layouts';

const About = () => {
  const size = '3rem';

  return (
    <>
      <Container>
        <Row>
          <Story />
          <Skills size={size} />
        </Row>
      </Container>
    </>
  );
};

export default About;

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

const Row = styled.div`
  width: 100%;

  max-width: 1240px;

  display: grid;
  grid-template-columns: 4fr 2fr;

  align-items: center;
  column-gap: 3rem;
  padding-top: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    div {
      padding: 2rem 0 0 1rem;
    }
  }
`;
