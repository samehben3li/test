import styled from "styled-components"

const StyledButton = styled.button`
  background: ${props=>props.typ === "pr" ?"linear-gradient(to right, #14163c 0%, #03217b 79%)":"linear-gradient(to right, #D0EAF0 0%, #4290F8z 89%)" };
  color: ${props=>props.typ === "pr" ? "white" : "#03217b"};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 39%;
  height: 3rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover{
    scale: 1.1;/* 
    background: linear-gradient(to left, #14163c 0%, #03217b 100%); */
  }
`

const Button = ({content,onClick,typ}) => {
  return (
    <StyledButton typ={typ} onClick={onClick}>{content}</StyledButton>
  )
}

export default Button