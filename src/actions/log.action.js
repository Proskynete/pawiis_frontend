import axios from 'axios';
import { CREATE_LOG_SUCCESS, CREATE_LOG_ERROR } from '../config/constants';
import { getUrl } from '../config/config';

export const createNewLogAction = (dispatch) => async (logData) => {
	const { action_type, description, id_pet, id_owner } = logData;
	const user = JSON.parse(localStorage.getItem('user'));
	const url = getUrl('/log');

	try {
		const { data } = await axios.post(url, {
			action_type,
			description,
			pet_id: id_pet,
			owner_id: id_owner,
			executor_id: user._id,
		});

		return dispatch({
			type: CREATE_LOG_SUCCESS,
			payload: {
				type: 'success',
				pet: data.pet,
			},
		});
	} catch (error) {
		return dispatch({
			type: CREATE_LOG_ERROR,
			payload: {
				type: 'error',
			},
		});
	}
};
