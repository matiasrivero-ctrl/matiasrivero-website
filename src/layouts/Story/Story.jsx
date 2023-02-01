import styled from 'styled-components';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Story = () => (
  <MyStory>
    <h2>My Story</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
      reiciendis amet inventore magnam nemo mollitia saepe sequi, corporis
      asperiores quas a vitae ab dolorum ipsa enim exercitationem laborum
      doloremque repellat.
    </p>

    <button className="resume">
      <div className="download_icon">
        <AiOutlineArrowDown size="24px" />
      </div>
      <p>Resume (CV)</p>
    </button>
  </MyStory>
);

export default Story;

const MyStory = styled.div`
  padding: 1rem;
  align-self: flex-start;

  p {
    text-align: justify;
    padding-top: 0.5rem;
    line-height: 30px;
  }

  .resume {
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background: none;

    :hover {
      transition: all 0.5s ease-out;
      padding-top: 0.5rem;
      color: red;
    }

    margin-top: 3rem;

    .download_icon {
      padding: 1rem 1rem 1rem 0;
      border-radius: 100%;
      font-size: 1rem;
    }

    p {
      padding-top: 0;
      font-family: 'Bebas Neue', cursive;
      font-size: 22px;
      letter-spacing: 1px;
      padding-left: 0rem;
    }
  }
`;
