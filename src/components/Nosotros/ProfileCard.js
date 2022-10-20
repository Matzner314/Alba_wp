import React from 'react'
import { makeStyles, Grid, Box, Typography } from '@material-ui/core';
import './ProfileCard.css'
import Foto1 from '../../images/empresario.png'
import cow_logo from '../../images/cow_logo_2.png'
import empresario_informatica from '../../images/empresario_informatica.png'
import pc_logo from '../../images/computadora-personal.png'
export default function ProfileCard() {
    return (
        <Box>
            <Grid container>
                <Grid item sx={12} sm={6}>
                    <Box
                        className="picturee"

                    >
                        <img

                            className="picture1"
                            src={Foto1}
                        />
                    </Box>

                </Grid>
                <Grid item sx={12} sm={6}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                            <Box
                                className="description"
                            >
                                <p className="name">Pablo Loaiza</p>
                                <p className="position">Ceo</p>
                                <p className="profession">Ingeniero Agrónomo</p>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                            <Box
                                className="description_2"
                            >
                                <p className="person-description" >Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Dest laborum.</p>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Box
                                className="description"
                                display={{ sm: "none", xs: "none", lg: "block" }}
                            >
                                <img

                                    className="picture_logo"
                                    src={cow_logo}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Box
                                className="description-na"
                                display={{ sm: "none", xs: "none", lg: "block" }}>
                            </Box>
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>

            <br></br>

            <Grid container>

                <Grid item sx={12} sm={6}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                            <Box
                                className="description"
                            >
                                <p className="name">Christian Matzner</p>
                                <p className="position">Proyect Manajer</p>
                                <p className="profession">Ingeniero Civil Informático</p>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                            <Box
                                className="description_2"
                            >
                                <p className="person-description" >Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Dest laborum.</p>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Box
                                className="description"
                                display={{ sm: "none", xs: "none", lg: "block" }}
                            >
                                <img

                                    className="picture_logo"
                                    src={pc_logo}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Box
                                className="description-na"
                                display={{ sm: "none", xs: "none", lg: "block" }}>
                            </Box>
                        </Grid>

                    </Grid>

                </Grid>
                <Grid item sx={12} sm={6}>
                    <Box
                        className="picturee"

                    >
                        <img

                            className="picture1"
                            src={empresario_informatica}
                        />
                    </Box>

                </Grid>

            </Grid>

        </Box>


    )
}
