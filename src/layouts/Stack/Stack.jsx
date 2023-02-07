import styled from 'styled-components';
import { SiReact, SiHtml5, SiCss3, SiStrapi, SiRailway } from 'react-icons/si';
const Stack = () => {
  return (
    <>
      <h2>Stack used</h2>

      <Tech>
        <div>
          <SiHtml5 color="#E34F26" size="3rem" />
        </div>

        <div>
          <SiCss3 color="#1572B6" size="3rem" />
        </div>

        <div>
          <SiReact color="#61DAFB" size="3rem" />
        </div>

        <div>
          <SiStrapi color="#2F2E8B" size="3rem" />
        </div>

        <div>
          <SiRailway color="#0B0D0E" size="3rem" />
        </div>
      </Tech>
    </>
  );
};

export default Stack;

const Tech = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  column-gap: 2rem;
  row-gap: 2rem;

  padding: 1rem 0 0 0;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    background-color: #f5f5f5;
  }
`;
