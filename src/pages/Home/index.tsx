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
      spacing={5}
      columns={{ sm: 4, md: 6, lg: 12 }}
      flexDirection='row'
      sx={{
        justifyContent: 'space-evenly',
        alignItems: "stretch"
      }}
      >
        <Grid
        size={2}
        >
          <SideBar />
        </Grid>

        <Divider 
        orientation="vertical" 
        flexItem
        sx={{
          borderColor: 'secondary.main',
          height: '100vh'
        }}
        />

        <Grid
        size={2}
        >
          <Feed />
        </Grid>

        <Divider 
        orientation="vertical" 
        flexItem
        sx={{
          borderColor: 'secondary.main',
          height: '100vh'
        }}
        />

        <Grid
        size={2}
        >
          <Explore />
        </Grid>

      </Grid>

    </>
  )
}
