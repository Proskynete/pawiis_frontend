import axios from 'axios';
import { SIGN_IN_SUCCESS, SIGN_IN_ERROR } from '../config/constants';
import { getUrl } from '../config/config';

export const signInAction = (dispatch) => async (credentials) => {
	const { email, password } = credentials;
	const url = getUrl('/users/signin');

	try {
		const { data } = await axios.post(url, {
			email,
			password,
		});

		localStorage.setItem('token', JSON.stringify(data.user.token));
		localStorage.setItem('role', JSON.stringify(data.user.role));

		return dispatch({
			type: SIGN_IN_SUCCESS,
			payload: {
				logged_in: true,
			},
		});
	} catch (error) {
		return dispatch({
			type: SIGN_IN_ERROR,
			payload: {
				logged_in: false,
				error_message:
					'Error en el correo o la contraseña, verifíquelas e intente nuevamente',
			},
		});
	}
};

export const logoutAction = (dispatch) => () => {};
