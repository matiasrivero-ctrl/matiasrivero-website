import styled from 'styled-components';
import {
  Html5PlainIcon,
  Css3PlainIcon,
  JavascriptPlainIcon,
  ReactOriginalIcon,
  NodejsPlainIcon,
  ExpressOriginalIcon,
  MysqlPlainIcon,
  MongodbOriginalIcon,
  TypescriptPlainIcon,
} from 'react-devicons';

const Skills = ({ size }) => {
  return (
    <Skill>
      <h2>Skills</h2>
      <div className="skills_icons">
        <Html5PlainIcon size={size} />
        <Css3PlainIcon size={size} />
        <JavascriptPlainIcon size={size} />
        <TypescriptPlainIcon size={size} />
        <ReactOriginalIcon size={size} />
        <NodejsPlainIcon size={size} />
        <ExpressOriginalIcon size={size} />
        <MysqlPlainIcon size={size} />
        <MongodbOriginalIcon size={size} />
      </div>
    </Skill>
  );
};

export default Skills;

const Skill = styled.div`
  padding: 1rem;

  h2 {
    letter-spacing: 1px;
    font-family: 'Space Mono', sans-serif;
    text-transform: uppercase;
  }

  .skills_icons {
    display: grid;
    grid-template-columns: repeat(4, 5fr);
    column-gap: 2rem;
    row-gap: 2rem;

    padding: 1rem 0 0 0;
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
