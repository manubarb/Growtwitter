import styled from 'styled-components'

export const FormWrapper = styled.form`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  gap: 15px;
  border-radius: 0 10px 10px 0;

  h3 {
    color: #4d4d4dff;
    font-weight: 600;
  }

  div {
    gap: 5px;
  }

  label {
    color: #999999ff;
    font-weight: 300;
    font-size: 12px;
  }

  input {
    width: 15vw;
    height: 3vh;
    border-radius: 5px;
    border: solid 1px #e7e7e7ff;
  }
`

export const Button = styled.button`
  border: 0;
  padding: .5vw 5vw;
	border-radius: 5px;
	background-color: #1DA1F2;
	color: #ffff;
	
`
