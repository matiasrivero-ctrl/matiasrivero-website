import styled from 'styled-components';

const Projects = ({ project }) => {
  const { title, description, code, demo } = project.attributes;

  return (
    <Container>
      <div>
        <div className="card">
          <h1>{title}</h1>
          <p>{description}</p>
          <a href="#">{code}</a>
          <a href="#">{demo}</a>
        </div>
      </div>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 100%;
  height: 50vh;
`;
