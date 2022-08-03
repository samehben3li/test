import styled from "styled-components"
import Button from "../components/Button"

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    `

const Title = styled.h2`
margin: 3rem 0 2rem 0;
cursor: default;
`

const SubTitle = styled.h4`
    margin-bottom: 6rem;
`

const Profile = ({user,setUser}) => {

  const handleLogout = () => {
    localStorage.setItem("user",JSON.stringify(null))
    setUser(null)
  }
  return (
    <Container>
        <Title>Welcome</Title>
        <SubTitle>{user?.firstName +" " + user?.lastName}</SubTitle>
        <Button content="Logout" typ="pr" onClick={handleLogout}/>
    </Container>
  )
}

export default Profile