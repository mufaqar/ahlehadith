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
        categories {
          nodes {
            slug
            name
          }
        }
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export const UpdatesByCategoryHadees = gql`
  query UpdatesByCategory {
    updateType(id: "daily-hadees", idType: SLUG) {
      updates(first: 1, where: { orderby: { field: DATE, order: ASC } }) {
        nodes {
          title
          dailyUpdatesInfo {
            source
            description
          }
        }
      }
    }
  }
`;

export const UpdatesByCategoryQuran = gql`
  query UpdatesByCategory {
    updateType(id: "daily-quran", idType: SLUG) {
      updates(first: 1, where: { orderby: { field: DATE, order: ASC } }) {
        nodes {
          title
          dailyUpdatesInfo {
            source
            description
          }
        }
      }
    }
  }
`;

export const UpdatesByCategoryQoute = gql`
  query UpdatesByCategory {
    updateType(id: "daily-qoute", idType: SLUG) {
      updates(first: 1, where: { orderby: { field: DATE, order: ASC } }) {
        nodes {
          title
          dailyUpdatesInfo {
            source
            description
          }
        }
      }
    }
  }
`;

export const Videos = gql`
  query videos {
    videos {
      nodes {
        videoInfo {
          videoUrl
        }
        videoTypes {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

export const Books = gql`
  query books {
    books(first: 10) {
      edges {
        node {
          booksInfo {
            downloadFile {
              mediaItemUrl
            }
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;

export const Members = gql`
query NewQuery($first: Int ) {
  members(first: $first) {
    nodes {
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      title
    }
  }
}`;

export const VideoType = gql`
query videoTypes {
  videoTypes(first: 100) {
    nodes {
      name
      slug
    }
  }
}`;

export const PictureData = gql`
query PictureData($id: ID!) {
  picture(id: $id, idType: SLUG) {
    title
    pictureInfo {
      gallery {
        mediaItemUrl
        altText
      }
    }
  }
}`;


export const VideoByTypes = gql`
query videoType($id: ID = "") {
  videoType(id: $id, idType: SLUG) {
    videos(first: 100) {
      nodes {
        videoInfo {
          videoUrl
        }
      }
    }
  }
}`;