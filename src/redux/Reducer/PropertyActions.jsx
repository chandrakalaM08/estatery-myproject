
import axios from 'axios';
import {
    fetchPropertiesRequest,
    fetchPropertiesSuccess,
    fetchPropertiesFailure,
} from '../actionTypes';

const baseUrl = "https://legendary-marred-crawdad.glitch.me"
export const fetchProperties = (selectedParams) => async (dispatch) => {
    dispatch(fetchPropertiesRequest());

    try {
        const response = await axios.get('/properties', {
            baseURL: baseUrl,
            params: selectedParams
        });

        dispatch(fetchPropertiesSuccess(response.data));
    } catch (error) {
        dispatch(fetchPropertiesFailure(error.message));
    }
};
