import styled from "styled-components"
import  {useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import { users } from "../data"

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: all 1s ease-in-out;
    position: absolute;
    top: ${props=>props.visible ? "0" : "1000px" };
`

const TiTle = styled.h2`
    margin: 3rem 0 2rem 0;
    cursor: default;
`
const InputContainer = styled.div`
    margin-top: 2rem;
    width: 100%;
    min-height: 120px;
    padding: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
`

const Error  = styled.span`
    font-size: 12px;
    margin-top: 10px;
    padding: 3px;
    font-weight: 700;
    color: red;
    transition: all ease;
    /* animation: error 2s infinite;
    @keyframes error {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0;
        }
    } */
`

const Login = ({visible,setUser}) => {

    const [userEmail,setUserEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errors,setErrors] = useState({email: false, password: false,status: false})

    const validate = ({email,password}) => {
        const errors = {}/* 
        const regexEmail = /^[^\s@]+@[^\s@].[^\s@]{2,}$/i */
        if (email.length < 3) {
            errors.email = true
        }
        if (password.length<3) {
            errors.password = true
        }
        return errors
    } 

    const handleLogin = (e) => {
        e.preventDefault()
        setErrors({email: "", password: "",status: false})
        setErrors(validate({email: userEmail,password}))
        if(!errors.status){
            const user = users.find(u=>(u.email === userEmail && u.password === password)||(u.username===userEmail && u.password === password))
            if (!user){
                setErrors({...errors,status : true})
            }
            setUser(user)
        }
    }

  return (
    <Container visible={visible}>
        <TiTle>Test Login</TiTle>
        <InputContainer>
            <Input type="text" placeholder="Username or Email" onChange={e=>setUserEmail(e.target.value)} value={userEmail} error={errors.email} />
            <Input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)} value={password} error={errors.password} />
        </InputContainer>
        <Button typ="pr" content="Login" onClick={handleLogin} />
        <Error>{errors.email ? "plaise entre valide email or username": errors.password  ? "plaise entre valide password" : "invalid account"}</Error>
    </Container>
  )
}

export default Login