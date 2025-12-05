import { FormWrapper, Button } from './styles'

export function LoginForm() {
  return (
    <>
      <FormWrapper>
        <label>Username</label>
        <input type="text" name="username" />

        <label>Password</label>
        <input type="text" name="password" />

        <Button>Entrar</Button>
      </FormWrapper>
    </>
  )
}
