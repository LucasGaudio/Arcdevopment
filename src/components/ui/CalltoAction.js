import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import useMediaQuerry from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    marginTop: "1em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
    [theme.breakpoints.only("xl")]: {
      backgroundPosition: "center",
      backgroundSize: "100% 100%",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
}));

export default function CallToAction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuerry(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br /> Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid container justify={matchesSM ? "center" : undefined} item>
              <Button
                onClick={() => props.setValue(2)}
                component={Link}
                to="/revolution"
                variant="outlined"
                className={classes.learnButton}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          onClick={() => props.setValue(5)}
          component={Link}
          to="/estimate"
          variant="contained"
          className={classes.estimateButton}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}
