import { useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'
import { FormWrapper, Button } from './styles'

export function LoginForm() {
  const { signIn } = useContext(AuthContext)

  function handleLogin() {
    signIn()
  }
  
  return (
    <>
      <FormWrapper>
        <div>
        <h3>Entrar no Growtwitter</h3>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />

          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
        </div>

        <Button onClick={handleLogin}>Entrar</Button>
      </FormWrapper>
    </>
  )
}
