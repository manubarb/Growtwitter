import { Box, AppBar, Toolbar, Typography, Avatar, Stack, Divider, Grid, CircularProgress } from "@mui/material"
import { useEffect } from "react"
import ChatBubbleOutlineOutlinedIcon  from '@mui/icons-material/ChatBubbleOutlineOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { fetchTweets, loadUserData } from '../../store/slices/tweetSlice'
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { useAuth } from "../../hooks/useAuth"

export function Profile(){
    const dispatch = useAppDispatch()
    const { list, loading, user: userAuth } = useAppSelector((state) => state.tweets)
    const { user } = useAuth()

    useEffect(() => {
      if(user?.id){
      dispatch(fetchTweets(user.id))
      dispatch(loadUserData(user.id))
      }

    }, [dispatch])
  
    return(
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

        <Box
        position='relative'
        bgcolor='primary.main'
        height={150}
        />

        <Box
        position='absolute'
        top={160}
        left={560}
        >
          <Avatar
          src={userAuth?.imageUrl}
          sx={{ width: 100, height: 100, bgcolor: 'white' }}
          />
        </Box>

        <Box
        marginTop={7}
        >
            <Stack
            marginLeft={1}
            >
              <Typography noWrap variant='body2'>{user?.name}</Typography>
              <Typography variant='caption'>@{user?.username}</Typography>
            </Stack>
        </Box>

        <Divider 
        flexItem
        sx={{
          borderColor: 'secondary.main',
          marginTop: 2       
        }}
        />
        
        {loading &&
        <Box 
        display='flex'
        justifyContent='center'
        marginTop={2}
        >
          <CircularProgress color="primary" size={40} thickness={4} />
        </Box>}
        { !loading && list?.length === 0 && (
          <Box padding={2}>Não há tweets para exibir.</Box>
        )}

       { list?.map((tweet) => (
        <Box
        key={tweet.id}
        >
            <Box
            display= 'flex'
            padding={3}
            >
              <Avatar alt="perfil" src={tweet.author?.imageUrl} sx={{ bgcolor: 'white' }}/>

              <Stack
              marginLeft={1}
              >
              <Typography variant='body1' sx={{ fontSize: 14}} >
                {tweet.author?.name}
                <Typography variant='caption' sx={{ marginLeft: 1, fontWeight: 300}}>
                  @{tweet.author?.username}
                </Typography>
                </Typography>
              <Typography variant='caption'>{tweet.content}</Typography>

              <Grid 
              maxWidth={100}
              justifyContent='space-between'
              display='flex'
              flexDirection='row'
              marginTop={1}
              >

                <Grid ><ChatBubbleOutlineOutlinedIcon fontSize="inherit"/></Grid>
                <Grid ><FavoriteBorderOutlinedIcon fontSize="inherit"/></Grid>
                <Grid ><DeleteOutlineOutlinedIcon fontSize="inherit"/></Grid>

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

        ))}

        </>
    )
}