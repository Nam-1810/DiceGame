import styled from 'styled-components';

export const Button = styled.button`
  color:white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 200px;
  border: 1px solid transparent;
  font-size: 16px;
  transition: 0.4s background ease-in;
   

  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`