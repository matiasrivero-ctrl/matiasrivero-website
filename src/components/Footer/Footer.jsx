import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <p>Done with ❤️ by Matías Rivero</p>
          <p>All rights reserved © 2023.</p>
        </Row>
      </Container>
    </>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;

  margin-top: 2rem;

  display: flex;
  justify-content: center;

  background-color: black;
`;
const Row = styled.div`
  width: 100%;
  max-width: 1240px;

  margin: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: gray;

  p {
    padding: 0;
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
  }
`;
