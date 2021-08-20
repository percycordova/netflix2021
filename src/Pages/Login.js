import React, { useState, useEffect } from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import { NetflixButton, NetflixInput } from '../styled/styleComponent';
import imgBanner from '../img/logo-Banner.jpg';
import logo from "../img/Netflix-Logo.png";
import { SingUp } from "../Pages/SingUp";
import axios from "../axios";
import request from '../Requests';

export const Login = () => {
    let classes = useStyles();
    const [signIn, setSignIn] = useState(false);

    const handleOnClick = () => {
        setSignIn(true);
    }

    const [movie, setMovie] = useState([]);


    useEffect(() => {

        const fetchData = async () => {
            const req = await axios.get(request[3].fetchGender);
            //console.log("que fue",req.data.results);
            const random = Math.floor(Math.random() * req.data.results.length - 1);
            //console.log("aleatorio --->",random)
            setMovie(req.data.results[random])
            return req;
        }
        fetchData();

    }, []);




    return (
        <>

            <div className={classes.root}
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                }}


            >
                <img alt="logo" src={logo} className={classes.logo} />
                <NetflixButton onClick={() => handleOnClick()} className={classes.session}>Iniciar Sesion</NetflixButton>
                <div className={classes.info}>
                    {
                        signIn ? (<SingUp />)
                            : (
                                <>
                                    <Typography variant="h4" gutterBottom>
                                        Unimited films, tv programmes and more
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                        Watch anywhere. Cancel any Time.
                                    </Typography>
                                    <Typography variant="h6" gutterBottom>
                                        Ready to watch? Enter your email to crate or restar your
                                        membreship
                                    </Typography>
                                    <div className={classes.inputBlock}>
                                        <NetflixInput placeholder="Email address" className={classes.email} />
                                        <NetflixButton width="250px" >GET STARTED</NetflixButton>
                                    </div>
                                </>
                            )
                    }

                </div>

            </div>

        </>

    )
}
const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        height: "100vh",
        //backgroundImage: `url(${imgBanner})`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        backgroundSize: "cover",
       // backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      

    },

    logo: {
        width: "150px",
        position: "fixed",
        left: 20,
        top: 0,
        cursor: "pointer",

    },
    session: {
        position: "fixed",
        zIndex: 15,
        right: 20,
        top: 20,
    },
    inputBlock: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        [theme.breakpoints.down("xs")]: {
            flexDirection: "column"
        }
    },
    email: {
        width: "350px",
        margin: "1rem 0.1rem",
        [theme.breakpoints.down("xs")]: {
            width: "250px",
        }
    },
    info: {
        marginLeft: "1rem",
        color: "#fff",
        zIndex: 15,
        '& h4': {
            fontWeight: 800,
        },
        '& h5': {
            fontWeight: 400,
        }
    }

}));