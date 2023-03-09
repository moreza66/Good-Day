import React from "react";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form.js";
import goodday from "./Images/goodday.png";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          GOOD-DAY
        </Typography>
        <img
          className={classes.image}
          src={goodday}
          alt="goodday"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}></Grid>
            <Posts />
            <Grid item xs={12} sm={4}></Grid>
            <Form />
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
