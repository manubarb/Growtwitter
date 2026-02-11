import { Box, Avatar, Stack, Typography, Grid, Divider } from "@mui/material"
import { useFetchTweets } from "../../hooks/useFetchTweets"
import { useEffect } from "react"
import ChatBubbleOutlineOutlinedIcon  from '@mui/icons-material/ChatBubbleOutlineOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

export function TweetList(){
    const { tweetData, fetchTweets, loading } = useFetchTweets()
    console.log("Estado atual:", { loading, tweetData });
    
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

    useEffect(() => {
      getFeed()
    }, [])

    return (
        <>        
        {loading && <Box padding={2}>Carregando tweets...</Box>}
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
              <Avatar alt="perfil" src="">U</Avatar>

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