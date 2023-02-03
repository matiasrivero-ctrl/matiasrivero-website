import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

// Assets
import profile from '../../assets/profile.jpg';
import background from '../../assets/background.mp4';

const Background = () => (
  <>
    <Video src={background} autoPlay loop muted></Video>
    <Content>
      <div className="profile">
        <img src={profile} />
      </div>
      <div className="titles">
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
    </Content>
  </>
);

export default Background;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
  padding: 0;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: white;
  font-family: 'Poppins', sans-serif;
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-columns: 2fr 2fr;

  .profile {
    width: 350px;
    height: 350px;

    margin: 0;
    padding: 1.5rem;
    img {
      width: 100%;
      height: 100%;

      border-radius: 5px;
    }
  }

  .titles {
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

  @media (max-width: 768px) {
    grid-template-columns: 2fr;

    .profile {
      width: 250px;
      height: 250px;
    }
  }
`;
