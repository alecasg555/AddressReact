//Result initial state
const initialState = {
    address: "",
    forecastInfo:[],
    isLoading: false,
    error: ''
  };

//Reducer for address
const addressReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_REQUEST':
        return { ...state, isLoading: true }; 
      case 'GET_FORECAST_SUCCESS':
        return { ...state, isLoading: false, forecastInfo: action.payload, error:'' };
        case 'GET_FORECAST_FAILURE':
          return { ...state, isLoading: false, error: 'Invalid Address, Example: "4600 Silver Hill Rd, Washington, DC 20233" ' };
      default:
        return state;
    }
  };
  export default addressReducer;
