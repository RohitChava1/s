import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ArrowBackIosIcon />
          </IconButton>
          <div>
          <Avatar
              style={{ border: "2px solid gray", margin: 10 }}
              alt="JohnDoe"
              src="D"
        />
          </div>
          <div style={{alignSelf:'auto',flexDirection:"column"}}>
            <Typography>JohnDoe</Typography>
            <Typography style={{alignSelf:'start'}}>001</Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
