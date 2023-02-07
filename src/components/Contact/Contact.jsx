import styled from 'styled-components';

import { SiGmail, SiGithub, SiLinkedin } from 'react-icons/si';
import { Stack } from '../../layouts';
const Contact = () => {
  return (
    <>
      <Container>
        <Row>
          <h1>Contact</h1>

          <Info>
            <div>
              <SiGmail color="#EA4335" size="1.5rem" />
              <a href="#">Gmail</a>
            </div>
            <div>
              <SiGithub color="#181717" size="1.5rem" />
              <a href="#">Github</a>
            </div>

            <div>
              <SiLinkedin color="#0A66C2" size="1.5rem" />
              <a href="#">LinkedIn</a>
            </div>
          </Info>

          <Stack />
        </Row>
      </Container>
    </>
  );
};

export default Contact;

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 2rem 0 0 0;

  display: flex;
  justify-content: center;
`;

const Row = styled.div`
  width: 100%;
  max-width: 1240px;

  h1 {
    text-transform: uppercase;
    padding: 0 0 1rem 0;
  }

  h2 {
    margin-top: 2rem;
  }
`;

const Info = styled.div`
  width: 100%;
  padding: 1rem 0 0 0;

  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 0rem;
    margin: 0rem;

    div {
      padding: 0;
      margin: 0;

      a {
        padding: 0;
      }
    }
  }

  div {
    margin: 0;
    padding: 0.5rem;

    :first-child {
      margin: 0;
    }

    display: flex;
    flex-direction: row;

    cursor: pointer;

    :hover {
      transition: all 0.5s ease;
      background: #85cdfd;
      border: 1px solid black;
      padding: 0.5rem;
    }

    a {
      padding: 0 0 0 0.5rem;
      font-weight: lighter;

      text-decoration: none;

      color: darkblue;
    }
  }
`;
