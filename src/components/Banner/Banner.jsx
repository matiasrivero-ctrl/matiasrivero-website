import styled from 'styled-components';

const Banner = () => {
  return (
    <>
      <Container>
        <img src="https://picsum.photos/200" />

        <div>
          <h1>Hello, world!</h1>
          <h3>Backend Dev ¬ Solidity Dev</h3>
        </div>
      </Container>
    </>
  );
};

export default Banner;

const Container = styled.div`
  width: 100%;
  height: 35vh;
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
  position: relative;
  z-index: -10;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;
  }

  div {
    padding: 2rem;
    color: white;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 60vh;

    div {
      padding: 1rem;
      text-align: center;
    }
  }
`;
