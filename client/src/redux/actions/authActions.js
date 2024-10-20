import axios from 'axios';

export const loginUser = (formData) => async (dispatch) => {
    try {
        const { data } = await axios.post('/api/auth/login', formData);
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.message });
    }
};

export const registerUser = (formData) => async (dispatch) => {
    try {
        const { data } = await axios.post('/api/auth/register', formData);
        dispatch({ type: 'REGISTER_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'REGISTER_FAIL', payload: error.response.data.message });
    }
};
