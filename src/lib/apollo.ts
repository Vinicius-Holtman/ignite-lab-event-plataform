import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl6jxy2dw5l2e01tg35xn0qy9/master',
  cache: new InMemoryCache()
})