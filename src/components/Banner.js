import React, { useEffect, useState } from 'react'
import { makeStyles, Typography, Button } from '@material-ui/core';
import imgBanner from '../img/Hero-Banner.jpg';
import axios from "../axios";
import request from '../Requests';
const Banner = () => {
  //component h1= launque la etiqueta sea un h2, le da la importancia de un h1
  let classes = useStyles();
  const truncate = (string = "", n) => (string.length > n) ? `${string.substring(0, n - 1)} ...` : string;

  const [movie, setMovie] = useState([]);


  useEffect(() => {

    const fetchData = async () => {
      const req = await axios.get(request[1].fetchGender);
      //console.log("que fue",req.data.results);
      const random = Math.floor(Math.random() * req.data.results.length - 1);
      //console.log("aleatorio --->",random)
      setMovie(req.data.results[random])
      return req;
    }
    fetchData();

  }, []);
  console.log(movie?.backdrop_path);
  //? nos previene que no se rompa el app por si no haya ua imagen en la api consumida
  return (
    <div className={classes.root} style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      position: "relative",
      minHeight: "450px",
      backgroundRepeat: "no-repeat",
      objectFit: "cover",
      //backgroundSize: "100%",
      //backgroundPosition: "center",
      color: "#fff",
      //display: "flex",
      //alignItems:"center",

    }}>
      <div className={classes.content}>
        <Typography variant="h2" component="h1" className={classes.title}>
          {movie?.title || movie?.name || movie?.original_name}
        </Typography>
        <div className={classes.buttons}>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
        <Typography
          variant="h6"
          className={classes.description}
          style={{ wordWrap: "break-word" }}>
          {truncate(movie?.overview, 150)}
        </Typography>
        <div className={classes.blurred}></div>
      </div>

    </div>
  )
}

export default Banner;
const useStyles = makeStyles((theme) => ({
  root: {



  },
  title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    }
  },
  description: {
    marginLeft: "1rem",
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    }
  },
  content: {
    "& h1": {
      paddingTop: "1.5rem",
      paddingLeft: "1rem",
    }


  },
  buttons: {
    marginLeft: "1rem",
    margin: "2rem 0",
    "& button": {
      color: "#fff",
      fontWeight: 700,
      borderRadius: "5px",
      padding: theme.spacing(1, 4, 1, 4),
      marginRight: "1rem",
      backgroundColor: "rgba(51,51,51,0.75)",
    },
    "& button:hover": {
      color: "#000",
      backgroundColor: "#e6e6e6",
    }
  },
  blurred: {

    position: "absolute",
    top: "40vh",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage:
      "linear-gradient(180deg,transparent,rgba(37,37,37,0.81),#111)"
  }

}));