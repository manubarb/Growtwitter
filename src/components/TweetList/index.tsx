import { Box, Avatar, Stack, Typography, Grid, Divider, IconButton } from "@mui/material"
import { useEffect } from "react"
import ChatBubbleOutlineOutlinedIcon  from '@mui/icons-material/ChatBubbleOutlineOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import { AppBar, Toolbar } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress'
import { deleteTweet, fetchTweets, loadUserData } from "../../store/slices/tweetSlice"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { useAuth } from "../../hooks/useAuth"
import { toggleLike } from "../../store/slices/tweetSlice"

export function TweetList(){
    const { isDeleted, list, loading } = useAppSelector((state) => state.tweets)    
    const dispatch = useAppDispatch()
    const { user } = useAuth()

    useEffect(() => {
      if(user?.id){
      dispatch(fetchTweets(user.id))
      dispatch(loadUserData(user.id))
      }

    }, [dispatch])

    function handleRemoveTweet(id: string){
      dispatch(deleteTweet(id))
    }

    function handleLike(tweetId: string){
      if(user?.id){
        dispatch(toggleLike({tweetId, userId: user.id}))
      }
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

                <Grid >
                  <IconButton>
                    <ChatBubbleOutlineOutlinedIcon sx={{ width: 15, height: 15}} />
                  </IconButton>
                </Grid>

                <Grid >
                  <IconButton
                  onClick={() => handleLike(tweet.id)}
                  >
                    {tweet.likes?.some(l => l.userId === user?.id) ? 
                    (<FavoriteOutlinedIcon sx={{ width: 15, height: 15, color: 'red'}} />
                    ) : (<FavoriteBorderOutlinedIcon sx={{ width: 15, height: 15}} />)}
                    
                  </IconButton>
                  </Grid>
                  
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