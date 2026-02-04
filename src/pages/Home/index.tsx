// deve conter o feed de tweets do usuário logado
import { CssBaseline, Divider, Grid } from '@mui/material'
import { Explore } from '../../components/Explore'
import { Feed } from '../../components/Feed'
import { SideBar } from '../../components/SideBar'
//import { Container } from './styles'

export function Home() {
  return (
    <>
      <CssBaseline />
      <Grid
      container
      columns={{ sm: 4, md: 6, lg: 12 }}
      flexDirection='row'
      sx={{
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}
      >
        <Grid
        size={3}
        >
          <SideBar />
        </Grid>

        <Divider 
        orientation="vertical" 
        flexItem
        sx={{
          borderColor: 'secondary.main',
          
        }}
        />

        <Grid
        size={4}
        >
          <Feed />
        </Grid>

        <Divider 
        orientation="vertical" 
        flexItem
        sx={{
          borderColor: 'secondary.main'        
        }}
        />

        <Grid
        size={3}
        padding={3}
        marginTop= {1}

        >
          <Explore />
        </Grid>

      </Grid>

    </>
  )
}
