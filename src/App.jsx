import styled from "styled-components"
import  { useState,useEffect } from "react"
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Profile from "./pages/Profile";

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
  overflow: hidden;
  position: relative;

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

const Hr = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(55px);
  position: absolute;
  bottom: 3.1rem;
`;

const LinkLogin = styled.h4`
  position: absolute;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0rem;
  cursor: pointer;
  z-index: 2;
`;


const App = () => {

  const [page, setPage] = useState(1)
  const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)


/*   useEffect(() => {
    localStorage.setItem("user",JSON.stringify(user))
},[user]) */

  return (
    <Container>
      {!user 
      ?<><Signup visible={page===1} setPage={setPage} />
      <Hr />
      <LinkLogin onClick={()=>setPage(page===1 ? 2 : 1)} setUser={setUser}>Or {page === 1 ? "Login" : "Signup"} ?</LinkLogin>
      <Login visible={page===2}setPage={setPage} setUser={setUser} /> </>
      :<Profile user={user} setUser={setUser} />}
    </Container>
  )
}

export default App
