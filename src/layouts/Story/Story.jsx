import styled from 'styled-components';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Story = () => (
  <MyStory>
    <h2>About me</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
      reiciendis amet inventore magnam nemo mollitia saepe sequi, corporis
      asperiores quas a vitae ab dolorum ipsa enim exercitationem laborum
      doloremque repellat.
    </p>

    <button className="resume">
      <p>Download CV</p>
    </button>
  </MyStory>
);

export default Story;

const MyStory = styled.div`
  padding: 1rem;
  align-self: flex-start;

  h2 {
    letter-spacing: 1px;
    font-family: 'Space Mono', sans-serif;
    text-transform: uppercase;
  }

  p {
    text-align: justify;
    padding-top: 0.5rem;
    line-height: 30px;
    font-weight: lighter;
    font-family: 'Poppins', sans-serif;
  }

  .resume {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid red;
    padding: 7px;
    border-radius: 10px;

    background: none;

    :hover {
      transition: all 0.5s ease-out;
      color: red;
    }

    margin-top: 3rem;

    p {
      padding-top: 0;
      font-family: 'Poppins', sans-serif;
      font-size: 20px;
      padding-left: 0rem;
    }
  }
`;
