import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ResultCard({ forecastDay }) {
    return (
        <Card sx={{ width: 210, margin: '10px' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={forecastDay.icon}
            />
            <CardContent sx={{height:240}}>
                <Typography gutterBottom variant="h5" component="div">
                    {forecastDay.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {forecastDay.detailedForecast}
                </Typography>
            </CardContent>
            <CardContent  >
                <Typography gutterBottom variant="h2" component="div">
                    { forecastDay.temperature } ° {forecastDay.temperatureUnit}
                </Typography>
            </CardContent>
        </Card>
    );
}