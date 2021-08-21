import React from "react";
import useStyles from "./styles";
import Hero from "./Hero/Hero";
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
      </main>
    </>
  );
};

export default Homepage;
