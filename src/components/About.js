import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import useMediaQuerry from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import history from "../assets/history.svg";
import profile from "../assets/founder.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";

import CallToAction from "./ui/CalltoAction";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  missionStatment: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  avatar: {
    height: "25em",
    width: "25em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuerry(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column">
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "1em" : "2em" }}
      >
        <Typography align={matchesMD ? "center" : undefined} variant="h2">
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: "3em" }}
      >
        <Typography
          align="center"
          variant="h4"
          className={classes.missionStatment}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>

      <Grid
        item
        container
        justify="space-around"
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        alignItems={matchesMD ? "center" : undefined}
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            style={{ maxWidth: "35em" }}
            lg
          >
            <Grid item>
              <Typography
                variant="h4"
                align={matchesMD ? "center" : undefined}
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We're the new kids on the block
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify="center" lg>
            <img
              src={history}
              alt="quill pen sitting on top of book"
              style={{
                maxHeight: matchesMD ? 200 : "22em",
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowContainer}
        style={{
          marginBottom: "15em",
        }}
      >
        <Grid item>
          <Typography variant="h4" align="center" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center" paragraph>
            Zachary Reece, Founder
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            I started coding when I was 9 years old.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="founder" src={profile} className={classes.avatar} />
        </Grid>

        <Grid item container justify={matchesMD ? "center" : undefined}>
          <Hidden lgUp>
            <Grid item style={{ maxWidth: "45em", padding: "1.25em" }} lg>
              <Typography variant="body1" align="center" paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>

          <Grid item container lg>
            <Grid
              item
              container
              alignItems={matchesMD ? "center" : undefined}
              direction="column"
              style={{ marginBottom: matchesMD ? "2.5em" : 0 }}
            >
              <Grid item>
                <img
                  src={yearbook}
                  alt="yearbook page about founder"
                  style={{ maxWidth: matchesMD ? 300 : undefined }}
                />
              </Grid>
              <Grid item>
                <Typography variant="caption">
                  a page from my Sophmore yearbook
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Hidden mdDown>
            <Grid item style={{ maxWidth: "45em", padding: "1.25em" }} lg>
              <Typography variant="body1" align="center" paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>

          <Grid
            item
            container
            direction="column"
            alignItems={matchesMD ? "center" : "flex-end"}
            lg
          >
            <Grid item>
              <img
                src={puppy}
                alt="grey spotted puppy"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                my miniature dapple dachshund, Sterling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
