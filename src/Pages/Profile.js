import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import Header from '../components/Header';
import Plans from '../components/Plans';
import avatar from "../img/avatar.png";
import { NetflixButton } from "../styled/styleComponent";
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

const plans = [{
    id: 1,
    name: "Netflix Standard",
    coste: 7.99,
    width: "130px",

}
    , {
    id: 2,
    name: "Netflix Básic",
    coste: 11.99,
    width: "130px",

}, {
    id: 3,
    name: "Netflix Premiun",
    coste: 15.99,
    color: "#aaa",
    width: "200px",

}];
export const Profile = () => {
    const classes = useStyles();
    const history = useHistory();
    const signout = () => {
        auth.signOut();
        history.push("/login")
    }


    return (
        <div className={classes.root}>
            <Header />
            <Typography variant="h3">Edit Profile</Typography>

            <div className={classes.info}>
                <img src={avatar} alt="avatar" />
                <div className={classes.details}>
                    <div className={classes.plans}>
                        <Typography variant="h6">cordovaflores1994@hotmail.com</Typography>
                        <Typography variant="h5" gutterBottom className={classes.plansText}>Plans</Typography>
                        {plans.map((obj) =>
                            <Plans
                                key={obj.id}
                                cost={obj.coste}
                                color={obj.color}
                                width={obj.width}
                            >
                                {obj.name}
                            </Plans>)}
                        <NetflixButton
                            className={classes.sing}
                            width="100%"
                            onClick={signout}
                        >Sing Out
                        </NetflixButton>
                    </div>
                </div>
            </div>


        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {

        color: "#fff",
        minHeight: "100vh",
        maxWidth: "600px",
        margin: " auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",



    },
    info: {

        width: "95%",
        display: "flex",
        marginTop: "2rem",
        '& img': {
            width: "100px",
            height: "110px",
            objectFit: "cover",
            marginRight: "1rem",
            [theme.breakpoints.down("xs")]: {
                display: "none",
            }
        }
    },
    sing: {
        width: "100%"
    }
    ,
    details: {
        width: "100%",

        '& h6': {
            backgroundColor: "#aaa",
            padding: theme.spacing(1),
            marginBottom: theme.spacing(1),
            fontSize: "18px"
        }
    },
    plans: {
        width: "100%",
        '& h5': {

        }
    },
    plansText: {
        borderBottom: "1px solid lightgray",
    }


}));