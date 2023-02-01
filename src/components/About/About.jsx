import styled from 'styled-components';

import { Skills, Story } from '../../layouts';

const About = () => {
  const size = '4rem';

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

  background: #f9f9f9;

  display: flex;
  justify-content: center;
`;

const Row = styled.div`
  width: 100%;

  max-width: 1240px;

  display: flex;
  align-items: center;
  column-gap: 3.5rem;
  padding-top: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    div {
      padding: 2rem;
    }
  }
`;
