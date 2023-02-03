import styled from 'styled-components';
import {
  Html5OriginalWordmarkIcon,
  Css3OriginalWordmarkIcon,
  JavascriptOriginalIcon,
  ReactOriginalWordmarkIcon,
  NodejsOriginalIcon,
  ExpressOriginalIcon,
  MysqlOriginalIcon,
  MongodbOriginalIcon,
  TypescriptPlainIcon,
} from 'react-devicons';

const Skills = ({ size }) => {
  return (
    <Skill>
      <h2>Skills</h2>
      <div className="skills_icons">
        <div className="icons">
          <Html5OriginalWordmarkIcon size={size} />
        </div>
        <div className="icons">
          <Css3OriginalWordmarkIcon size={size} />
        </div>
        <div className="icons">
          <JavascriptOriginalIcon size={size} />
        </div>
        <div className="icons">
          <TypescriptPlainIcon size={size} />
        </div>
        <div className="icons">
          <ReactOriginalWordmarkIcon size={size} />
        </div>
        <div className="icons">
          <NodejsOriginalIcon size={size} />
        </div>
        <div className="icons">
          <ExpressOriginalIcon size={size} />
        </div>
        <div className="icons">
          <MysqlOriginalIcon size={size} />
        </div>
        <div className="icons">
          <MongodbOriginalIcon size={size} />
        </div>
      </div>
    </Skill>
  );
};

export default Skills;

const Skill = styled.div`
  padding: 1rem;

  h2 {
    font-family: 'Space Mono', sans-serif;
    text-transform: uppercase;
  }

  .skills_icons {
    display: grid;
    grid-template-columns: repeat(4, 5fr);
    column-gap: 2rem;
    row-gap: 2rem;

    padding: 1rem 0 0 0;

    .icons {
      padding: 1rem;

      background-color: #f5f5f5;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;

    .skills_icons {
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;

      column-gap: 1rem;
      row-gap: 1rem;
    }
  }

  @media (max-width: 350px) {
    .skills_icons {
      grid-template-columns: repeat(2, 2fr);
      justify-items: center;
      align-items: center;
    }
  }
`;
