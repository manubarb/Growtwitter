import { useContext } from 'react'
import { TweetContext } from '../contexts/TweetContext'

export function useFetchTweets(){
    return useContext(TweetContext)
}
