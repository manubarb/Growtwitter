import { useState, type FormEvent } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import { Box, Stack, TextField, Typography } from '@mui/material'

export function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { signIn, isSigningIn } = useAuth()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const success = await signIn(username, password)
    if (success) {
      navigate('/home', { replace: true })
      console.log('logado')
    } else {
      console.log('erro ao logar')
    }
  }

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
           <Typography variant='h5'>Entrar no Growtwitter</Typography>
           <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            label="username"
            autoComplete="true"
            variant="outlined" 
           />

           <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            label="password"
            autoComplete="true"
            variant="outlined" 
           />

          <Button 
          type="submit" 
          loading={isSigningIn}
          loadingPosition="center"
          variant="contained"
          >
            Entrar
          </Button>
        </Stack>
      </Box>
    </>
  )
}
