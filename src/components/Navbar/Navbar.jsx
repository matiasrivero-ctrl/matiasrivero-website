import { useState } from 'react';

import styled from 'styled-components';
import { Burger } from '../../layouts';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <Container>
        <div className="row">
          <h2>
            Matías <span>Rivero</span>
          </h2>

          <div className={`links ${clicked ? 'active' : ''}`}>
            <div className="link">
              <a href="#about" target="_blank" rel="noopener noreferrer">
                About
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Contact
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Projects
              </a>
            </div>
          </div>

          <div className="burger">
            <Burger clicked={clicked} handleClick={handleClick} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;

const Container = styled.div`
  width: 100%;

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    max-width: 1240px;
    min-width: 279px;
    margin: auto;

    h2 {
      color: #005bc5;
      font-weight: 300;

      span {
        font-weight: bold;
      }
    }

    .links {
      .link {
        a {
          font-size: 20px;
          color: black;
          text-decoration: none;
          padding: 2rem;

          :hover {
            transition: all 0.5s ease;
            color: #e8cc9c;
          }

          :last-child {
            padding-right: 0;
            padding-bottom: 5px;
          }
        }
      }
    }

    .burger {
      display: none;
    }

    // Media query
    // -- Responsive - Mobile
    @media (max-width: 768px) {
      h2 {
        color: #005bc5;
      }

      .links {
        position: absolute;
        top: -100%;
        right: 0;
        left: 0;

        z-index: -1;
      }

      .burger {
        display: inline;
      }

      .active {
        padding: 0;
        top: 5%;
        right: 0;
        left: 0;

        background: #fff;

        transition: all 0.5s ease;

        .link {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          row-gap: 1rem;

          margin-top: 2.5rem;

          a {
            padding: 0;
          }
        }
      }
    }
  }
`;
