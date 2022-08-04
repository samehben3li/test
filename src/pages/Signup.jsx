import styled from "styled-components"
import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import { users } from "../data.js"

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: all 1s ease-in-out;
    position: absolute;
    top: ${props=>props.visible ? "0" : "-500px" };
`

const TiTle = styled.h2`
    margin: 3rem 0 2rem 0;
    cursor: default;
`

const InputContainer = styled.div`
    width: 100%;
    min-height: 220px;
    overflow-x: hidden;
    padding: 5px;
    position: relative;
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 100%;
    position: absolute;
    transition: all 1s ease-out;
    left: ${props=>props.pos === 1 ? "0" : "-540px"};  
`

const InputWrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 100%;
    position: absolute;
    transition: all 1s ease-out;
    right: ${props=>props.pos === 2 ? "0" : "-540px"}; 
`

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
  gap: 10px;
  transition: all 0.5s ease-in-out;
`

const Error  = styled.span`
    font-size: 12px;
    padding: 3px;
    font-weight: 700;
    color: red;
    transition: all ease;
    /* animation: error 1s infinite;
    @keyframes error {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0;
        }
    } */
`

const Select =styled.select`
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
border-radius: 2rem;
width: 80%;
height: 3rem;
padding: 1rem;
border: none;
outline: none;
color: #3c354e;
font-size: 1rem;
font-weight: bold;
outline: ${props=>props.error ? "1px solid red" : "none"};
&:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
}
&::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
}`
const Option = styled.option``



const Signup = ({visible,setPage}) => {

    const [pos, setPos] = useState(1)
    const [first,setFirst] = useState(true)
    const [firstSign,setFirstSign] = useState(true)
    const [values,setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmePassword: "",
        firstName: "",
        lastName: "",
        phone: "",
        profession:""
    })
    const [errorsValues,setErrorsValues] = useState({
        username: false,
        email: false,
        password: false,
        confirmePassword: false,
        firstName: false,
        lastName: false,
        phone: false,
        profession:false
    })
    const [errors,setErrors] = useState([])

    const handleNext = () => {
        setErrors([])
        setErrorsValues({
            username: false,
            email: false,
            password: false,
            confirmePassword: false
        })
        const regexEmail = /^[^\s@]+@[^\s@].[^\s@]{2,}$/i
        const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/
        if (values.username.length<3){
            setErrors(prev=>[...prev,"invalide username"])
            setErrorsValues(prev=>({...prev,username:true}))
        }
        if (!regexEmail.test(values.email)) {
            setErrors(prev=>[...prev,"invalide email"])
            setErrorsValues(prev=>({...prev,email:true}))
        }
        if (!regexPass.test(values.password)) {
            setErrors(prev=>[...prev,"invalide password"])
            setErrorsValues(prev=>({...prev,password:true}))
        }
        if (values.password !== values.confirmePassword) {
            setErrors(prev=>[...prev,"invalide confirme password"])
            setErrorsValues(prev=>({...prev,confirmePassword:true}))
        }

        if (errors.length === 0 ) {
            setFirst(false)
        }
        if ((errors.length === 0 ) && (first===false)){
            setPos(2)
        }
    }

    const handleSignup = (e) => {
        e.preventDefault()
        setErrors([])
        setErrorsValues(prev=>({...prev,
            firstName: false,
            lastName: false,
            phone: false,
            profession:false
        }))
        if (values.firstName.length<3) {
            setErrors(prev=>[...prev,"invalide first name"])
            setErrorsValues(prev=>({...prev,firstName: true}))
        }
        if (values.lastName.length<3) {
            setErrors(prev=>[...prev,"invalide last name"])
            setErrorsValues(prev=>({...prev,lastName: true}))
        }
        if (isNaN(values.phone)||values.phone.length!==8){
            setErrors(prev=>[...prev,"invalide phone number"])
            setErrorsValues(prev=>({...prev,phone: true}))
        }
        

        if (errors.length === 0 ) {
            setFirstSign(false)
        }
        if ((errors.length === 0 ) && (firstSign===false)){
            users.push(values)
            setPage(2)
        }
        
    }


  return (
    <Container visible={visible}>
      <TiTle>Test Signup</TiTle>
      <InputContainer>
        <InputWrapper pos={pos}>
            <Input type="text" placeholder="Username" value={values.username} onChange={e=>setValues({...values,username: e.target.value})} error={errorsValues.username} />
            <Input type="email" placeholder="Email" value={values.email} onChange={e=>setValues({...values,email: e.target.value})} error={errorsValues.email} />
            <Input type="password" placeholder="Password" value={values.password} onChange={e=>setValues({...values,password: e.target.value})} error={errorsValues.password} />
            <Input type="password" placeholder="Confirm Password" value={values.confirmePassword} onChange={e=>setValues({...values,confirmePassword: e.target.value})} error={errorsValues.confirmePassword} />
        </InputWrapper>
        <InputWrapper2 pos={pos}>
            <Input type="text" placeholder="First Name" value={values.firstName} onChange={e=>setValues({...values,firstName: e.target.value})} error={errorsValues.firstName} />
            <Input type="text" placeholder="Last Name" value={values.lastName} onChange={e=>setValues({...values,lastName: e.target.value})} error={errorsValues.lastName} />
            <Input type="text" placeholder="Phone" value={values.phone} onChange={e=>setValues({...values,phone: e.target.value})} error={errorsValues.phone} />
            <Select onChange={e=>setValues({...values,profession: e.target.value})} error={errorsValues.profession} >
                <Option value={1}>Ingenieur</Option>
                <Option value={2}>tec Sup</Option>
            </Select>
        </InputWrapper2>
      </InputContainer>
      <ButtonContainer>
        { pos ===1 
        ? <Button typ="pr" pos={pos} content="Next" onClick={handleNext} /> 
        : <>
            <Button typ="sc" pos={pos} content="Prev" onClick={()=>setPos(1)}/> 
            <Button typ="pr" content="Signup" onClick={handleSignup} />
        </>
        }
      </ButtonContainer>
      <Error>{ errors.length>0 && errors[0] }</Error>
    </Container>
  )
}

export default Signup
