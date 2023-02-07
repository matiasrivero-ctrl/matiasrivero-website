import styled from 'styled-components';

const Story = () => (
  <MyStory>
    <h1>About me</h1>
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

  h1 {
    text-transform: uppercase;
  }

  p {
    padding: 0.5rem 0.5rem 0 0;
    line-height: 30px;
    font-weight: lighter;
    font-family: 'Poppins', sans-serif;
  }

  .resume {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;

    background: none;

    :hover {
      cursor: pointer;
      transition: all 0.5s ease-out;
      border: 2px solid black;
      background: #85cdfd;
      padding: 0.7rem;
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
