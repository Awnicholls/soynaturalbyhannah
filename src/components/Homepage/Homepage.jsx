import React from 'react'
import useStyles from "./styles";
const Homepage = () => {
const classes = useStyles();

    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>
            home
        </div>
        </main>
    )
}

export default Homepage
