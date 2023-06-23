import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import  back  from '../assets/img/profile2.png';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#252850',
    height: '40vh',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative',
    
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: '50%',
    border: `2px solid ${theme.palette.background.paper}`,
    position: 'absolute',
    bottom: -60,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1,
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  profilePicMask: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 2,
  },
  content: {
    position: 'relative',
    zIndex: 3,
    textAlign: 'center',
    color: theme.palette.common.white,
    padding: theme.spacing(6),
  },
}));

const ProfileBanner = ({ profilePicUrl, name, bio }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.profilePic}>
        <div className={classes.profilePicMask} />
        <img src={profilePicUrl} alt="Profile" />
      </Box>
      <Box className={classes.content}>
        <Typography variant="h4" gutterBottom>{name}</Typography>
        <Typography variant="body1">{bio}</Typography>
      </Box>
    </Box>
  );
};

export default ProfileBanner;
