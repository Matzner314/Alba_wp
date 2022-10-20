import React from 'react'
import ProfileCard from './ProfileCard';
import { makeStyles, Grid, Box, Typography } from '@material-ui/core';
import './Profiles.css'

export default function Profiles() {
    return (
        <React.Fragment >
            <Grid container className="shape">
                <Grid item xs={12}>
                    <Box
                        borderRadius='8px'
                        boxShadow='1px 0px 2px 0px #00000040'
                    >
                        <ProfileCard />
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
