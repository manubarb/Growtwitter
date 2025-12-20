import { useState, type FormEvent } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { FormWrapper, Button } from './styles'

export function LoginForm() {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  const { signIn, isLoading } = useAuth()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const success = await signIn(username, password)
    if(success){
      console.log('logado')
    }else{
      console.log('erro ao logar')
    }
  }
  
  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <div>
        <h3>Entrar no Growtwitter</h3>
          <label htmlFor="username">Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" autoComplete='true' />

          <label htmlFor="password">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" autoComplete='true' />
        </div>

        <Button type='submit' disabled={isLoading}>
          Entrar
        </Button>
      </FormWrapper>
    </>
  )
}
