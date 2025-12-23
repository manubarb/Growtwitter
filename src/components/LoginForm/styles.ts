import styled from 'styled-components'

export const FormWrapper = styled.form`
  display: flex;
  padding: 5em 1.5em;
  flex-direction: column;
  gap: 10px;
  border-radius: 0 10px 10px 0;
  background-color: #ffff;
  height: 100%;

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
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: solid 1px #e7e7e7ff;
  }
`

export const Button = styled.button`
  border: 0;
  padding: 0.75vw 5vw;
  border-radius: 8px;
  background-color: #1da1f2;
  color: #ffff;
  margin-top: 10px;
  cursor: pointer;
`
