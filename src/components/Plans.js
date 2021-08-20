import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { NetflixButton } from '../styled/styleComponent';
import { useDispatch } from 'react-redux';
import { setPrice } from '../features/priceSlice';
import { useHistory } from 'react-router-dom';
const Plans = ({ cost, children, color, width }) => {

  let classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => {
    dispatch(setPrice(cost))
   // history.push("/checkout");
  }




  return (
    <div className={classes.root}>
      <Typography className={classes.titlePlans} variant="h5">
        {children}
        <span>$.{cost}</span>
      </Typography>
      <NetflixButton
        color={color}
        width={width}
        onClick={() => handleClick(cost)}
      >
        Subscribe</NetflixButton>
    </div >
  )
}

export default Plans
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
    "& button": {
      marginBottom: theme.spacing(2),
    },
  },
  titlePlans: {
    fontSize: "1.3rem",
    "& span": {
      marginLeft: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.1rem",
    }
  },
  color: {

  }


}));