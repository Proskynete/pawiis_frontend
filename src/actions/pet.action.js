import axios from 'axios';
import { CREATE_PET_SUCCESS, CREATE_PET_ERROR } from '../config/constants';
import { getUrl } from '../config/config';

export const createNewPetAction = (dispatch) => async (petData) => {
	const { name, age, sex } = petData;
	const currentUser = JSON.parse(localStorage.getItem('user'));
	const url = getUrl('/users/signin');

	try {
		const { data } = await axios.post(url, {
			name,
			age,
			sex,
			owner: currentUser._id,
		});

		console.log(data);

		return dispatch({
			type: CREATE_PET_SUCCESS,
			payload: {
				type: 'success',
			},
		});
	} catch (error) {
		return dispatch({
			type: CREATE_PET_ERROR,
			payload: {
				type: 'error',
			},
		});
	}
};
