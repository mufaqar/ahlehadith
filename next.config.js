/** @type {import('next').NextConfig} */
const nextConfig = {
     // images:{
     //      domains:["images.pexels.com", "youtube.com", "i.ytimg.com", "revelallday.org" , "ahlehadith.paigham.tv", "ant.a59.mywebsitetransfer.com"]
     // }
     images: {
          remotePatterns: [
            {
              protocol: "http",
              hostname: "**",
            },
            {
               protocol: "https",
               hostname: "**",
             },
          ],
        },
}

module.exports = nextConfig

