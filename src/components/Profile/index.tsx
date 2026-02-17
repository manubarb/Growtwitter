import { Box, AppBar, Toolbar, Typography, Avatar, Stack, Divider, Grid, CircularProgress } from "@mui/material"
import { useAuth } from "../../hooks/useAuth"
import { useFetchTweets } from "../../hooks/useFetchTweets"
import { useEffect } from "react"
import ChatBubbleOutlineOutlinedIcon  from '@mui/icons-material/ChatBubbleOutlineOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

export function Profile(){
    const { loadUserData, user } = useAuth()
    const { tweetData, fetchTweets, loading } = useFetchTweets()

    function getFeed(){
      const storageId = localStorage.getItem('@App:user')
      if (!storageId) {
        localStorage.removeItem('@App:token')
        localStorage.removeItem('@App:user')
        window.location.href = '/login'
        return
      }
      const user = JSON.parse(storageId)
      fetchTweets(user.id)
    }

    function getUserData(){
      const storedUser = localStorage.getItem('@App:user')
      if(storedUser){
        const userObj = JSON.parse(storedUser)
        loadUserData(userObj.id)
      }else if(!storedUser){
        localStorage.removeItem('@App:token')
        localStorage.removeItem('@App:user')
        window.location.href = '/login'
        return
      }
    }

    useEffect(() => {
      getFeed()
      getUserData()
    }, [])
  
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
          src={user.imageUrl}
          sx={{ width: 100, height: 100 }}
          />
        </Box>

        <Box
        marginTop={6}
        >
            <Stack
            marginLeft={1}
            >
              <Typography noWrap variant='body2'>{user.name}</Typography>
              <Typography variant='caption'>@{user.username}</Typography>
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
        { !loading && tweetData?.length === 0 && (
          <Box padding={2}>Não há tweets para exibir.</Box>
        )}

       { tweetData?.map((tweet) => (
        <Box
        >
            <Box
            key={tweet.id}
            display= 'flex'
            padding={3}
            >
              <Avatar alt="perfil" src={tweet.author.imageUrl}/>

              <Stack
              marginLeft={1}
              >
              <Typography variant='body1' sx={{ fontSize: 14}} >
                {tweet.author.name}
                <Typography variant='caption' sx={{ marginLeft: 1, fontWeight: 300}}>
                  @{tweet.author.username}
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