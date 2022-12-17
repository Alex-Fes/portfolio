import {Grid, Link, Typography} from "@mui/material";

import styles from "./Copyright.module.scss";
import React from "react";

export const Copyright = (props: any) => {
    return (

            <Typography  color="text.secondary" align="center" {...props}>
                <Grid className={styles.href}>
                    {'Copyright © '}
                    {new Date().getFullYear()}
                    {'.'}


                <Link color="inherit" href="#" className={styles.link}>
                    <h5>Portfolio developed by Alexei Fesenko</h5>
                </Link>{' '}
                </Grid>
            </Typography>




    )
}