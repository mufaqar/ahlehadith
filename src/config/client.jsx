import { ApolloClient, InMemoryCache } from '@apollo/client';

const URL = `${process.env.WORDPRESS_URL}/graphql`

const apolloClient = new ApolloClient({
  uri: "http://ahlehadith.paigham.tv/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;