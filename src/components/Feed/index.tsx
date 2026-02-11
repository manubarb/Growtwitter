import { Box, AppBar, Toolbar, Typography } from "@mui/material"
import { TweetList } from "../TweetList"

export function Feed() {  
  return (
    <>
        <Box>
          <AppBar position="sticky" variant='outlined' sx={{ backgroundColor: 'transparent'}}>
            <Toolbar>
              <Typography 
              variant="body1" 
              component="div"
              color='textPrimary'
              fontWeight={500}
              >
                Página Inicial
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>

        <TweetList />

    </>
  )
}
