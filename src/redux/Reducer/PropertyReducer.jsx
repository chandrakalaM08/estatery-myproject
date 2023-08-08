
import {
    FETCH_PROPERTIES_REQUEST,
    FETCH_PROPERTIES_SUCCESS,
    FETCH_PROPERTIES_FAILURE,
    SET_FILTERS,
    SET_SEARCH_QUERY,
} from '../actionTypes';

const initialState = {
    properties: [],
    loading: false,
    error: null,
    filters: { location: '', price: '', availableDate: '', type: '' },
    searchQuery: '',
};

const propertiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROPERTIES_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_PROPERTIES_SUCCESS:
            return { ...state, loading: false, properties: action.payload, error: null };
        case FETCH_PROPERTIES_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case SET_FILTERS:
            return { ...state, filters: { ...state.filters, ...action.payload } };
        case SET_SEARCH_QUERY:
            return { ...state, searchQuery: action.payload };
        default:
            return state;
    }
};

export default propertiesReducer;
