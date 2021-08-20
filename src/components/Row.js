import React, { useEffect, useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import axios from "../axios";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  let classes = useStyles();
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {

    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results)
      return request;
    }
    fetchData();

  }, [fetchUrl]);


  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>

      <div className={classes.posters}>
        {
          movies.map((movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`${classes.poster} ${isLargeRow && classes.posterLarge}`}
                key={movie.id}
                alt={movie?.name}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie?.backdrop_path
                  }`}
              />
            )
          )
        }
      </div>
    </div>
  )
}

export default Row;
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#111",
    marginLeft: theme.spacing(4),
    marginBottom: theme.spacing(1),
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
    }

  },
  title: {

    [theme.breakpoints.down("xs")]: {
      fontSize:"2rem",
      paddingBottom:"1rem ",

    }
  }

  ,
  posters: {
    display: "flex",
    overflowY: "hidden",
    overflowX: "scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },


  },
  poster: {
    cursor:"pointer",
    maxHeight: "12rem",
    objectFit: "contain",
    marginRight: theme.spacing(1),
    transition: "transform 450ms",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  posterLarge: {
    maxHeight: "15rem",
    "&:hover": {
      transform: "scale(1.15)",
    }
  }

}));