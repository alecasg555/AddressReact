import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ResultCard from './ResultCard';
import { Button, Grid, Typography } from '@mui/material';

const Results = () => {
    const foreCastInfo = useSelector(state => state.address.forecastInfo);
    const error = useSelector(state => state.address.error);
    const [foreCastDayTime, setForeCastDayTime] = useState(false);
    useEffect(() => {

    }, [foreCastInfo])

    return (

        <Grid container mt={5} textAlign={'center'}  >
            {error.length == 0 ? (
                <>
                    <Grid item sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr', margin: '0px auto' }} >

                        {
                            foreCastInfo.map((forecast) => {
                                if (forecast.isDaytime)
                                    return <ResultCard forecastDay={forecast} />
                            })

                        }
                    </Grid>
                    <Grid item sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr', margin: '0px auto' }} >

                        {
                            foreCastInfo.map((forecast) => {
                                if (!forecast.isDaytime)
                                    return <ResultCard forecastDay={forecast} />
                            })
                        }
                    </Grid>
                </>
            ) :
                <Grid item xs={12} md={12} xl={12} >
                    <Typography gutterBottom variant="h3" component="div">
                        {error}
                    </Typography>
                </Grid>}

        </Grid>
    )
}
export default Results;