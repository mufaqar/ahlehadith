const fs = require("fs");
const { ApolloClient, InMemoryCache, gql } = require("@apollo/client")


const BACKEND_SITE_URL = "https://revelallday.org/graphql";
const FRONTEND_URI = "https://ahlehadith.vercel.app";

// generate current data and time to given formate that required in sitemap
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0");
const day = String(now.getDate()).padStart(2, "0");
const hours = String(now.getHours()).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2, "0");
const seconds = String(now.getSeconds()).padStart(2, "0");
const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+00:00`;


const apolloClient = new ApolloClient({
  uri: BACKEND_SITE_URL,
  cache: new InMemoryCache(),
});


// generating sitemap here
async function generateSitemap() {

  const AllPosts = gql`
  query ALLPOSTS {
    posts(first: 100) {
      nodes {
        id
        modifiedGmt
        date
      }
    }
  }`;

  const postsRes = await apolloClient.query({
    query: AllPosts,
  });

  const posts = postsRes?.data?.posts?.nodes

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
          <loc>${FRONTEND_URI}</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${FRONTEND_URI}/about-us</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/ahlehadith-magazine</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/all-pakistan-conference</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/blogs</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/books-library</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/cabinet</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/contact-us</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/dastoor</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/departments</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/ele-media</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/electronic-media</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/haft-roza-ahlehadith</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/introduction</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/islamic-graphics</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/leadership</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/markazi-conferences</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/introduction</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/islamic-graphics</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/leadership</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/markazi-conferences</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/news</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/pictures</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/print-media</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/rallies</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/shura</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/subayi-nazam</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/tanzimi-ijlaas</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/team</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/ulma-ikram</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/videos</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/visits</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${FRONTEND_URI}/zilayi-tanzimat</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>1.00</priority>
      </url>
      ${posts
      .map(
        (item) => `<url>
          <loc>${FRONTEND_URI}/blogs/${item.id}</loc>
          <lastmod>${item?.date || item?.modifiedGmt}+00:00</lastmod>
          <priority>0.80</priority>
        </url> `
      )
      .join("")}
    </urlset>
  `;
  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
