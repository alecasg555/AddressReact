import axios from 'axios';
export const getRequest = () => ({
  type: 'GET_REQUEST',
});

export const getAddressSuccess = (data) => ({
  type: 'GET_ADDRESS_SUCCESS',
  payload: data,
});

export const getForecastSuccess = (data) => ({
  type: 'GET_FORECAST_SUCCESS',
  payload: data,
});

export const getForecastFailure = () => ({
  type: 'GET_FORECAST_FAILURE',
});

export const getGeoCodification = (query) => {
  return async (dispatch) => {
    dispatch(getRequest());
    try {
      const response = await axios.get(`https://localhost:44329/api/geocodification?address=${query}`);
      dispatch(getForecastSuccess(response.data.properties.periods));
      
    } catch (error) {
      dispatch(getForecastFailure());
    }
  };
};

