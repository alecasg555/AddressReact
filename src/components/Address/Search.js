import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGeoCodification } from '../../actions/actions';

const Search = () =>{
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();    
    useEffect(() => {

    }, [])
    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }
    
    const handleSearchButton = () => {
        dispatch(getGeoCodification(query));
    }
    const handleClearButton = () => {
        setQuery("");
        dispatch(getGeoCodification(query));

    }
    
    return(
        <Grid container mt={5}  >
            <Grid item xs={3} md={3} xl={3} ></Grid>
            <Grid item  xs={6} md={6} xl={6}  >
                <TextField onChange={handleInputChange} fullWidth id="outlined-basic" label="Search Address" variant="outlined" />
            </Grid>
            <Grid item mt={3} textAlign={'center'}  xs={12} md={12} xl={12} >
                <Button onClick={handleSearchButton}  variant="outlined">Search</Button>
            </Grid>

        </Grid>
    )
}
export default Search;