import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constants";

const CachannelCard = ({ channelDetails }) => (
  <Box sx={{
    boxShadow: 'none',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: { xs: '356px', md: '320px' },
    height: '326px',
    margin: 'auto'
  }}>
    <Link to={`/channel/${channelDetails?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#FFF' }}>
        <CardMedia
          image={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt="channel details"
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #ee3e3' }}
        />
        <Typography variant="h6">
          {channelDetails?.snippet?.title}
          <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: 5 }} />
        </Typography>
        {channelDetails?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
)

export default CachannelCard