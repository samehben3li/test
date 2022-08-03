import styled from "styled-components"
import Signup from "./pages/Signup"

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  min-width: 38vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;

  @media only screen and (max-width: 320px) {
    width: 80vw;
    min-height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    min-height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    min-height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    min-height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    min-height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    min-height: 80vh;
  }
`

const App = () => {
  return (
    <Container>
      <Signup />
    </Container>
  )
}

export default App
