import styled from 'styled-components';
import videoBg from '../../assets/videoGb.mp4';
import Typewriter from 'typewriter-effect';
import About from '../About/About';

const Banner = () => {
  return (
    <>
      <Main>
        <video src={videoBg} autoPlay loop muted></video>
        <div className="content">
          <h1>Matías Rivero</h1>
          <h2>
            <Typewriter
              options={{
                strings: ['Backend Developer', 'Solidity Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>

        <About />
      </Main>
    </>
  );
};

export default Banner;

const Main = styled.div`
  width: 100vw;
  height: 100vh;

  margin: 0;
  padding: 0;

  position: absolute;

  z-index: -1;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
    padding: 0;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: white;
    font-family: 'Poppins', sans-serif;
    padding: 0;
    margin: 0;

    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      text-transform: uppercase;
    }
    h2 {
      color: #645cbb;
    }
  }
`;
