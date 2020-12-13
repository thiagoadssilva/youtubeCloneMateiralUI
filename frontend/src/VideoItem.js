import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';

export default ({ video, onVideoSelect }) => {
    console.log(video);
    return (
        <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box onClick={() => onVideoSelect(video)} >
                <img
                    style={{ width: '100%' }}
                    alt=""
                    src={video.snippet.thumbnails.default.url}
                />
                <Box>
                    <Typography
                        style={{ fontWeight: 600 }}
                        gutterBotton
                        variant='body1'
                        color='textPrimary'
                    >
                        {video.snippet.title}
                    </Typography>
                    <Typography
                        style={{ fontWeight: 600 }}
                        gutterBotton
                        variant='body2'
                        color='textSecondary'
                    >
                        {video.snippet.channelTitle}
                    </Typography>
                    <Typography
                        variant='body2'
                        color='textSecondary'
                    >
                        {video.snippet.publishedAt}
                        {/* {`${item.views} - ${item.date}`} */}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    );
}