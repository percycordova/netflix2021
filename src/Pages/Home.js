import { makeStyles } from '@material-ui/core';
import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Row from '../components/Row';
import request from '../Requests';

export const Home = ({ setUser }) => {
    let classes = useStyles();


    //Objet.keys(obj) muestra el nombre de las propiedades de un objeto


    console.log("este arreglo", request);
    return (
        <div className={`${classes.root} ${classes.img}`}>
            <Header />
            <Banner />
            <Row title="NETFLIX ORIGINALS"
                fetchUrl={request[1].fetchGender}
                isLargeRow />
            {request.map(obj => (obj.nameGender != null) ? (<Row title={(obj.nameGender).toUpperCase()} fetchUrl={obj.fetchGender} key={obj.nameGender} />) : "")
            }

        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
        border: "1px solid #111",
    },
    img: {
        display: "block",
        width: "100%",
        maxWidth: "100%",
    }

}));
