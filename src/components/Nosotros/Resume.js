import React from 'react'
import { makeStyles, Grid, Box, Typography } from '@material-ui/core';
import './Resume.css'


export default function Resume() {
    return (
        <React.Fragment>
            <div>
                <Grid container spacing={0} className="shape">
                    <Grid item xs={12} sm={6}>
                        <Box
                            borderRadius='8px'
                            boxShadow='1px 0px 2px 0px #00000040'
                        >
                            <Typography >
                                <span className="title">Quienes somos?
                                </span>
                                <p className="textshape">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur
                                    sint occaecat cupidatat non proident, sunt in culpa
                                    qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box
                            borderRadius='8px'
                            boxShadow='1px 0px 2px 0px #00000040'
                        >
                            <Typography >
                                <span className="title">
                                    Experiencia del equipo
                                </span>

                                <p className="textshape">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur
                                    sint occaecat cupidatat non proident, sunt in culpa
                                    qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </div>

        </React.Fragment>
    )
}
