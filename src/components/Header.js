import React, { useEffect, useState } from 'react'
import { AppBar, makeStyles, Toolbar, Avatar, IconButton } from '@material-ui/core';
import logo from "../img/Netflix-Logo.png";
import { useHistory } from 'react-router-dom';

const Header = () => {
  //elevation={0} elimina el box shadow 
  const classes = useStyles();
  const history = useHistory();


  const [show, setShow] = useState(false);

  const hideHeader = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", hideHeader);
    return () => window.removeEventListener("scroll", hideHeader);
  }, []);

  return (
    <AppBar position="sticky" className={`${classes.root}  ${show && classes.transparent}`} elevation={0}>
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={()=>history.push("/")}>
          <img src={logo} alt="logo" className={classes.logo} />
        </IconButton>

        <Avatar 
        onClick={()=>history.push("/profile")} 
        variant="square" 
        style={{ cursor: "pointer" }} />

      </Toolbar>
    </AppBar>
  )
};
export default Header;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    top: "0",
    left: "0",
    
  },

  logo: {
    width: "100px",

  },
  transparent: {
    backgroundColor: "transparent",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

}));