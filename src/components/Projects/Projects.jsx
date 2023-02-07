import styled from 'styled-components';

const Projects = ({ project }) => {
  const { title, description, code, demo } = project.attributes;

  return (
    <Card>
      <div className="image-container">
        <img src="https://picsum.photos/200" />
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button className="btn-code">
        <a href="#code" className="code">
          Code
        </a>
      </button>
      <button className="btn-demo">
        <a href="#demo" className="demo">
          Demo
        </a>
      </button>
    </Card>
  );
};

export default Projects;

const Card = styled.div`
  border: 1px solid gainsboro;
  border-radius: 5px;

  padding: 1rem;

  .image-container {
    width: auto;
    height: auto;
    padding: 0 0 2rem 0;

    img {
      width: 100%;
      height: 100%;
    }
  }

  h1 {
    font-size: 18px;
    padding: 0 0 1rem 0;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    padding: 0 0 1rem 0;
  }

  button {
    padding: 0.5rem;
    background: none;

    margin: 0 1rem 0 0;

    a {
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      text-decoration: none;
      color: black;
    }
  }

  .btn-code {
    border: 2px solid black;

    :hover {
      transition: all 0.5s ease;
      background: #85cdfd;
      border-color: #000;
    }
  }

  .btn-demo {
    border: 2px solid black;

    background: #fef9ef;

    a {
      color: black;
    }

    :hover {
      transition: all 0.5s ease;
      background: #93bfcf;

      a {
        color: black;
      }
    }
  }
`;
