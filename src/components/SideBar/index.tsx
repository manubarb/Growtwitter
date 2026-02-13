import { Box, Button, Dialog, DialogActions, DialogContent, IconButton, Stack, TextField, Typography } from '@mui/material'
import { logout } from '../../services/api'
import Logo from '../Logo/index'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import TagRoundedIcon from '@mui/icons-material/TagRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import Avatar from '@mui/material/Avatar'
import React, { useState, type FormEvent } from 'react'
import { useFetchTweets } from '../../hooks/useFetchTweets'
import CloseIcon from '@mui/icons-material/Close' 
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export function SideBar() {
  const { createTweet} = useFetchTweets()
  const [tweet, setTweet] = useState('')
  const [ open, setOpen] = useState(false)
  const { user } = useAuth()
  const navigate = useNavigate()

  async function submitTweet(event: FormEvent){
    event.preventDefault()
    createTweet(tweet)
    setOpen(false)
  }

  return (
    <>
      <Stack
      sx={{
        width: '10rem',
        height: '100vh',
        marginLeft: 10,
        justifyContent: "space-between"

      }}
      >
        <Stack
        marginTop= {2} 
        gap={1}
        marginLeft={4}
        >
          <Logo style={{ width: 80, marginBottom: 5}} />

          <Box 
          display= 'flex'
          flexDirection= 'row'
          gap={1}
          alignItems='center'
          sx={{ cursor: 'pointer', transition: 'transform 100ms ease-in-out', '&:hover': { transform: 'scale(1.1)'} }}
          onClick={() => navigate('/home')}
          >
            <HomeRoundedIcon style={{ width: 20}}/>
            <Typography variant='body2'>Página Inicial</Typography>
          </Box>

          <Box 
          display= 'flex'
          flexDirection= 'row'
          gap={1}
          alignItems='center'
          sx={{ cursor: 'pointer', transition: 'transform 100ms ease-in-out', '&:hover': { transform: 'scale(1.1)'} }}
          onClick={() => navigate('/home/explore')}
          >
            <TagRoundedIcon style={{ width: 20}}/>
            <Typography variant='body2'>Explorar</Typography>
          </Box>

          <Box 
          display= 'flex'
          flexDirection= 'row'
          gap={1}
          alignItems='center'
          sx={{ cursor: 'pointer', transition: 'transform 100ms ease-in-out', '&:hover': { transform: 'scale(1.1)'} }}
          onClick={() => navigate('/home/profile')}
          >
            <PersonRoundedIcon style={{ width: 20}}/>
            <Typography  variant='body2'>Perfil</Typography>
          </Box>

            <React.Fragment>
                <Box
                marginTop={2}
                >
                  <Button 
                  onClick={() => setOpen((prev) => !prev)}
                  size="small"
                  variant="contained"
                  sx={{ 
                    borderRadius: 10, 
                    px: 6, 
                    textTransform: 'none', 
                    fontSize: 12, 
                    fontWeight: 400 
                  }}
                  
                  >
                  Twettar
                  </Button>
                </Box>
                  <Dialog open={open} onClose={() => setOpen(false)}>
                    <Box marginBottom={2} marginTop={1}>
                      <IconButton
                        sx={{
                          position: 'absolute',
                          right: 5
                        }}
                        onClick={() => setOpen(false)}
                        >
                          <CloseIcon/>
                      </IconButton>
                    </Box>
                    <form onSubmit={submitTweet}>
                      <DialogContent>
                          <TextField
                            multiline
                            rows={4}
                            placeholder='O que está acontecendo?'
                            variant="standard"
                            value={tweet}
                            onChange={(e) => setTweet(e.target.value)}
                          />
                      </DialogContent>
                      <DialogActions>
                        <Button 
                          type='submit'
                          onClick={() => setOpen(false)}
                          size="small"
                          variant="contained"
                          sx={{ 
                            borderRadius: 10, 
                            px: 3, 
                            textTransform: 'none', 
                            fontSize: 12, 
                            fontWeight: 400 
                          }}
                          >
                          Twettar
                          </Button>
                      </DialogActions>
                    </form>
                  </Dialog>
            </React.Fragment>
        </Stack>
      
        <Stack
        spacing={2}
        >
          <Box
          display= 'flex'
          flexDirection= 'row'
          >
            <Avatar alt="perfil" src={user?.imageUrl}/>
            
            <Stack
            marginLeft={1}
            >
            <Typography noWrap variant='body2'>{user?.name}</Typography>
            <Typography variant='caption'>@{user?.username}</Typography>
            </Stack>
           
          </Box>
         
          
          <Button 
          style={{ marginBottom: 15, width: 15}} 
          onClick={logout}
          variant='outlined'
          >
            sair
          </Button>
        </Stack>

      </Stack>
    </>
  )
}
