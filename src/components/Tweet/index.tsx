import { Box, Avatar, Stack, Typography, Grid, Divider } from "@mui/material"

export function Tweet(){
    return (
        <>
        <Box>
            <Box
            component='div'
            display= 'flex'
            padding={3}
            >
              <Avatar alt="perfil" src="">U</Avatar>

              <Stack
              marginLeft={1}
              >
              <Typography variant='body1' sx={{ fontSize: 14}} >
                User
                <Typography variant='caption' sx={{ marginLeft: 1, fontWeight: 300}}>
                  @username
                </Typography>
                </Typography>
              <Typography variant='caption'>Hey! what's up?</Typography>

              <Grid 
              justifyContent='space-between'
              display='flex'
              flexDirection='row'
              >

                <Grid >a</Grid>
                <Grid >b</Grid>
                <Grid >c</Grid>

              </Grid>
              </Stack>

            </Box>
            <Divider
            flexItem       
            sx={{
              border: '1px solid secondary.main'    
            }} 
            />
        </Box>
        </>
    )
}