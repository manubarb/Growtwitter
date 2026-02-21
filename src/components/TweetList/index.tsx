import { Box, Avatar, Stack, Typography, Grid, Divider, IconButton } from "@mui/material"
import { useFetchTweets } from "../../hooks/useFetchTweets"
import { useEffect } from "react"
import ChatBubbleOutlineOutlinedIcon  from '@mui/icons-material/ChatBubbleOutlineOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { AppBar, Toolbar } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress'
import { deleteTweet } from "../../store/slices/tweetSlice"
import type { AppDispatch} from "../../store"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../store/hooks"

export function TweetList(){
    const { tweetData, fetchTweets, loading } = useFetchTweets()
    const { isDeleted } = useAppSelector((state) => state.tweets)    
    const dispatch = useDispatch<AppDispatch>()

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

    function handleRemoveTweet(id: string){
      dispatch(deleteTweet(id))
    }

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
        {loading &&
        <Box 
        marginTop={2}
        display='flex'
        justifyContent='center'
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
              <Avatar alt="perfil" src={tweet.author.imageUrl} sx={{ bgcolor: 'white' }}/>

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
                <Grid >
                  <IconButton 
                    onClick={() => handleRemoveTweet(tweet.id)}
                    disabled={isDeleted.includes(tweet.id)} 
                  >
                    {isDeleted.includes(tweet.id) ? (
                      <CircularProgress size={10} /> 
                    ) : (
                      <DeleteOutlineOutlinedIcon sx={{ width: 15, height: 15}}/>
                    )}
                  </IconButton>
                </Grid>

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