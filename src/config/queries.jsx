import { gql } from "@apollo/client";

export const AllPosts = gql`
  query ALLPOSTS {
    posts {
      nodes {
        excerpt
        slug
        title
        date
        content
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;
