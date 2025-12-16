import { FormWrapper, Button } from './styles'

export function LoginForm() {
  return (
    <>
      <FormWrapper>
        <div>
        <h3>Entrar no Growtwitter</h3>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />

          <label htmlFor="password">Password</label>
          <input type="text" name="password" />
        </div>

        <Button>Entrar</Button>
      </FormWrapper>
    </>
  )
}
