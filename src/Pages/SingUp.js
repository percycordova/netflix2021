import React, { useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import { NetflixInput, NetflixButton } from '../styled/styleComponent'
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
export const SingUp = () => {
    let classes = useStyles();

    const initialForm = {
        email: "",
        password: "",
    }

    const [form, setForm] = useState(initialForm);
    const history =useHistory();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            //[e.target.name]:e.target.value
            //name:valor si ya esxiste el valor name lo actualiza
        });
    };

    const signIn = () => {
        auth.signInWithEmailAndPassword(form.email, form.password)
            .then((authUser)=>history.push("/"))
            .catch((err)=>alert(err.message))

    };
    const register = () => {


        if (form.email.trim().length > 6 && form.password.trim().length >= 6) {
            auth.createUserWithEmailAndPassword(form.email, form.password)
                .then((authUser) => history.push("/"))
                .catch((err) => alert(err.message))
            alert("Usuario Registrado");
            setForm(initialForm);
        } else {
            alert("La contraseña debe tener al menos 6 caracteres, los espacios en blanco no cuentan");
        }




    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.email || !form.password) {
            alert("rellene los campos");
            return;
        } else {
            signIn(e);
        }

       
    }

    const handleReset = (e) => {
        setForm(initialForm);

    }

    return (
        <div className={classes.root}>
            <Typography variant="h5" align="left">
                Sign in
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <NetflixInput
                    placeholder="Email"
                    className={classes.email}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                />
                <NetflixInput
                    placeholder="Password"
                    type="password"
                    className={classes.password}
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                />
                <NetflixButton
                    type="submit"
                    width="90%"

                >Sign In</NetflixButton>

                <Typography variant="subtitle2">
                    new to Netflix ?
                    <span
                        className={classes.signupLink}
                        onClick={register}

                    >    Sign Up now.
                    </span>
                </Typography>

            </form>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "4rem",
        paddingTop: "0.5rem",
        maxWidth: "350px",
        width: "20rem",
        height: "25rem",
        backgroundColor: "rgba(0,0,0,0.7)",

        "& h5": {

            width: "100%",
            margin: "1.5rem auto",
            textAlign: "center",

        },
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-aroung",
        alignItems: "center",
        "& input": {
            marginBottom: "1rem",
            width: "90%",
        },
        "& button": {
            margin: "1rem 0",
        }
    },
    signupLink: {
        color: "#fff",
        cursor: "pointer",
        marginLeft: "1rem",
        transition: "all 5ms",
        "&:hover": {
            textDecoration: "underline",
        },
    },

}));
