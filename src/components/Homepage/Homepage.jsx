import React from "react";
import useStyles from "./styles";
import Hero from "./Hero/Hero";
import Carousel from "./Carousel/Carousel"
import { CssBaseline } from "@material-ui/core";
import Features from "./Features/Features";
const Homepage = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Hero />
        <Features />
        <Carousel/>
      </main>
    </>
  );
};

export default Homepage;
