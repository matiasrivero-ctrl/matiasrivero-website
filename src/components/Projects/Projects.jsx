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

    border-radius: 10px;

    margin: 0 1rem 0 0;

    a {
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      text-decoration: none;
      color: black;
    }
  }

  .btn-code {
    border: 2px solid gainsboro;

    :hover {
      transition: all 0.5s ease;
      background: #645cbb;
      border-color: #645cbb;
    }
  }

  .btn-demo {
    border: none;
    background: #fef9ef;

    a {
      color: black;
    }

    :hover {
      transition: all 0.5s ease;
      background: #227c9d;

      a {
        color: black;
      }
    }
  }
`;
