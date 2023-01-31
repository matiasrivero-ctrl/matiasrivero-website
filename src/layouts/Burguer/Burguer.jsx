import styled from 'styled-components';

const BurgerButton = ({ clicked, handleClick }) => {
  return (
    <>
      <Burger>
        <div className="three col">
          <div
            className={`hamburger ${clicked ? 'is-active' : ''}`}
            id="hamburger-12"
            onClick={handleClick}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </Burger>
    </>
  );
};

export default BurgerButton;

const Burger = styled.div`
  /* ALL */

  .row .three {
    padding: 80px 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #2c3e50;
    color: #ecf0f1;
    text-align: center;
  }

  .hamburger .line {
    width: 50px;
    height: 5px;
    background-color: #000;
    border-radius: 5px;
    display: block;
    margin: 8px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .hamburger:hover {
    cursor: pointer;
  }

  #hamburger-12.is-active .line:nth-child(1) {
    opacity: 0;
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  #hamburger-12.is-active .line:nth-child(3) {
    opacity: 0;
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    -o-transform: translateX(100%);
    transform: translateX(100%);
  }
`;
