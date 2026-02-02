import { Box, Button, Stack, Typography } from '@mui/material'
import { logout } from '../../services/api'
import Logo from '../Logo/index'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import TagRoundedIcon from '@mui/icons-material/TagRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import Avatar from '@mui/material/Avatar'

export function SideBar() {
  return (
    <>
      <Stack
      sx={{
        width: '10rem',
        height: '100vh',
        marginLeft: 25,
        justifyContent: "space-between"

      }}
      >
        <Stack
        marginTop= {2} 
        gap={1}
        >
          <Logo style={{ width: 80, marginBottom: 5}} />

          <Box 
          display= 'flex'
          flexDirection= 'row'
          gap={1}
          alignItems='center'
          >
            <HomeRoundedIcon style={{ width: 20}}/>
            <Typography variant='body2'>Página Inicial</Typography>
          </Box>

          <Box 
          display= 'flex'
          flexDirection= 'row'
          gap={1}
          alignItems='center'
          >
            <TagRoundedIcon style={{ width: 20}}/>
            <Typography variant='body2'>Explorar</Typography>
          </Box>

          <Box 
          display= 'flex'
          flexDirection= 'row'
          gap={1}
          alignItems='center'
          >
            <PersonRoundedIcon style={{ width: 20}}/>
            <Typography variant='body2'>Perfil</Typography>
          </Box>
          
        </Stack>
      
        <Stack
        spacing={2}
        >
          <Box
          display= 'flex'
          flexDirection= 'row'
          >
            <Avatar alt="perfil " src="">U</Avatar>

            <Stack
            marginLeft={1}
            >
            <Typography variant='body2'>User</Typography>
            <Typography variant='caption'>@username</Typography>
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
