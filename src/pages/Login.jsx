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
    const [errorMail,setErrorMail] = useState(false)
    const [password,setPassword] = useState("")
    const [errorPass,setErrorPass] = useState(false)
    const [errors,setErrors] = useState([])
    const [isFetching,setIsFetching] = useState(false)

    const handleLogin = async(e) => {
        setIsFetching(true)
        e.preventDefault()
        setErrors([])
        setErrorMail(false)
        setErrorPass(false)
        if (userEmail.length < 3) {
            setErrors(prev => [...prev,"invalide username or email !"])
            setErrorMail(true)
        }
        if (password.length<3) {
            setErrors(prev=>[...prev,"invalide password !"])
            setErrorPass(true)
        }
        if( errors.length === 0 ){
            let user = users.filter(u=>(u?.username === userEmail && u?.password===password))
            if (user.length === 0){
                user = users.filter(u=>(u?.email === userEmail && u?.password===password))
            }
            if (user.length===0 ){
                setErrors(prev=>[...prev,"you account not found!"])
            }else{
            setUser(user[0])
            localStorage.setItem("user",JSON.stringify(user[0])) 
        }
        }
        setIsFetching(false)
    }

  return (
    <Container visible={visible}>
        <TiTle>Test Login</TiTle>
        <InputContainer>
            <Input type="text" placeholder="Username or Email" onChange={e=>setUserEmail(e.target.value)} value={userEmail} error={errorMail} />
            <Input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)} value={password} error={errorPass} />
        </InputContainer>
        <Button typ="pr" content="Login" onClick={handleLogin} disabled={isFetching} />
        <Error>{ errors?.length > 0 && errors[0] }</Error>
    </Container>
  )
}

export default Login