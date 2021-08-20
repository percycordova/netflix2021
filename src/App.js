
import { makeStyles } from '@material-ui/core';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from './Pages/Login';
import { Profile } from './Pages/Profile';
import { Home } from './Pages/Home';
import { Paypal } from './Pages/Paypal';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logaut, login, selectUser } from './features/userSlice';

function App() {
  let classes = useStyles();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();



  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          emial: userAuth.email
        }))
      } else {
        dispatch(logaut)
      }
    });
    return unsuscribe;

  }, [dispatch]);

  console.log("vamos a ver que sucede", user);

  return (

    <div className={classes.root}>


      {
         (<Router>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/checkout">
                <Paypal />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>)
        

      }


    </div >
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#111",
    minHeight: "100vh",

  }

}));

export default App;
