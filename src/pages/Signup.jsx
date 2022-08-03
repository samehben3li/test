import styled from "styled-components"
import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"

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

const Signup = () => {

    const [pos, setPos] = useState(1)

  return (
    <>
      <TiTle>Test Signup</TiTle>
      <InputContainer>
        <InputWrapper pos={pos}>
            <Input type="text" placeholder="Username" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Password again" />
        </InputWrapper>
        <InputWrapper2 pos={pos}>
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
            <Input type="text" placeholder="Phone" />
            <Input type="text" placeholder="Profession" />
        </InputWrapper2>
      </InputContainer>
      <ButtonContainer>
        { pos ===1 
        ? <Button typ="pr" pos={pos} content="Next" onClick={()=>setPos(2)} /> 
        : <>
            <Button typ="sc" pos={pos} content="Prev" onClick={()=>setPos(1)}/> 
            <Button typ="pr" content="Signup" />
        </>
        }
      </ButtonContainer>
    </>
  )
}

export default Signup
