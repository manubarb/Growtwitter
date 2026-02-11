import { createContext, useState, type ReactNode } from 'react'
import { authAPI } from '../services/api'
import type { User } from './AuthContext'

export interface Tweet {
  id?: string
  content: string
  author?: User
}

interface TweetContextData {
    tweetData: Tweet[] | null
    loading: boolean
    fetchTweets: (userId: string) => Promise<void>
    newTweet: Tweet | null
    createTweet: (content: string) => Promise<void>
}

export const TweetContext = createContext<TweetContextData>({} as TweetContextData)

export function TweetProvider({ children }: { children: ReactNode }) {
  const [tweetData, setTweetData] = useState<Tweet[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [newTweet, setNewTweet] = useState<Tweet | null>(null)

  async function fetchTweets(userId: string) {
    setLoading(true)
    try {
      const response = await authAPI.getTweets(userId)
      setTweetData(response.data.data)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  async function createTweet(content: string){
    try {
      const response = await authAPI.createTweet(content)
      setNewTweet(response.data.data)
    }catch(e){
      console.log(e)
    }
  }

  return (
    <TweetContext.Provider value={{ tweetData, fetchTweets, loading, newTweet, createTweet }}>
      {children}
    </TweetContext.Provider>
  )
}