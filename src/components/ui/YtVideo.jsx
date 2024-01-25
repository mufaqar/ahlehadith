import { VideoByTypes } from "@/config/queries";
import { getIDFromURL } from "@/utils";

const { default: YouTube } = require("react-youtube");

export const YtVideo = async ({ opts, onPlayerReady }) => {

  const {videosList} = await getData()

  return (
    <>
      {videosList?.map((d, i) => {
        return (
          <YouTube
            videoId={getIDFromURL(d?.videoInfo?.videoUrl)}
            opts={opts}
            key={i}
            className={`videocontainer`}
            iframeClassName={`w-full h-full aspect-square`}
            onReady={onPlayerReady}
          />
        );
      })}
    </>
  );
};


async function getData() {
  const [postres] = await Promise.all([
    apolloClient.query({ 
      query: VideoByTypes,
      variables: {
        id: "آل-پاکستان-کانفرنس"
      }
     }),
  ]);
  const videosList = postres?.data?.videoType?.videos?.nodes;

  if (!videosList) {
    throw new Error('Failed to fetch data')
  }

  return { videosList }
}