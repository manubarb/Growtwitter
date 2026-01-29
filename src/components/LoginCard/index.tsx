import { Box, CssBaseline, Typography, Grid } from '@mui/material'
import { LoginForm } from '../LoginForm'

export function LoginCard() {
  return (
    <>
      <CssBaseline />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: 1000,
            px: 10
          }}
        >
          <Grid
            container
            columns={{ xs: 2, sm: 4, md: 6, lg: 12 }}
            flexDirection={{ xs: 'column', sm: 'row', md: 'row', lg: 'row' }}
          >
            <Grid
              size={6}
              sx={{
                height: 350,
                backgroundColor: 'primary.main',
                borderTopLeftRadius: { xs: 20, lg: 20 },
                borderBottomLeftRadius: { xs: 0, lg: 20 },
                borderTopRightRadius: { xs: 20, lg: 0 },
                padding: '3rem',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Grid
                container
                direction="column"
                spacing={1}
                sx={{color: 'secondary.main'}}
              >
                <Typography variant="h5">Growtwitter</Typography>
                <Typography variant="subtitle2">
                  Trabalho final do bloco intermediário
                </Typography>
                <Typography variant="body1">
                  O Growtwitter é a plataforma definitiva para todos os apaixonados
                  por redes sociais que buscam uma experiência familiar e poderosa,
                  semelhante ao Twitter, mas com um toque único. Seja parte desta
                  comunidade que valoriza a liberdade de expressão, a conexão com
                  pessoas de todo o mundo e a disseminação de ideias.
                </Typography>
              </Grid>
            </Grid>

            <Grid
              size={6}
              sx={{
                height: 350,
                backgroundColor: 'background.paper',
                borderTopRightRadius: { xs: 0, lg: 20 },
                borderBottomRightRadius: { xs: 20, lg: 20 },
                borderBottomLeftRadius: { xs: 20, lg: 0 },
                padding: { lg: '5rem' },
                paddingLeft: { xs: '16rem', sm: '10rem', md: '16rem' },
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <LoginForm />
            </Grid>
            
          </Grid>
        </Box>
 
    </>
  )
}
