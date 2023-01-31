import styled from 'styled-components';

const About = () => {
  return (
    <>
      <Container>
        <Row>
          <div>
            <h2>My Story</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              reiciendis amet inventore magnam nemo mollitia saepe sequi,
              corporis asperiores quas a vitae ab dolorum ipsa enim
              exercitationem laborum doloremque repellat.
            </p>
          </div>
          <div>
            <h2>My Skills</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ab
              ipsum nisi molestiae repellat officia fuga quam in, placeat
              suscipit, unde tempore consequatur? Voluptas nam, atque laborum
              quia eligendi ut.
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default About;

const Container = styled.div`
  width: 100%;

  background: #f9f9f9;

  display: flex;
  justify-content: center;
`;

const Row = styled.div`
  width: 100%;

  max-width: 1240px;

  display: flex;
  align-items: center;

  padding-top: 2rem;

  div {
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-right: 2rem;

    p {
      padding-top: 0.5rem;
      line-height: 30px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    div {
      padding: 2rem;
    }
  }
`;
