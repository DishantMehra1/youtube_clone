import { Stack, Box } from "@mui/material"

import { VideoCard, CachannelCard } from './'

const Vidoes = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <CachannelCard channelDetails={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Vidoes