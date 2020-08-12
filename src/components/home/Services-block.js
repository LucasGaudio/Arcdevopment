import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../../components/ui/ButtonArrow";
import Typography from "@material-ui/core/Typography"
import animationData from "../../animations/landinganimation/data"

export default function LandingPage () {
    const classes = useStyles();
    const theme = useTheme();
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Grid item>

        </Grid>
        
    )
}