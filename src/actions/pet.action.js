import axios from 'axios';
import { CREATE_PET_SUCCESS, CREATE_PET_ERROR } from '../config/constants';
import { getUrl } from '../config/config';

export const createNewPetAction = (dispatch) => async (petData) => {
	const { name, age, sex } = petData;
	const user = JSON.parse(localStorage.getItem('user'));
	const url = getUrl('/pet');

	try {
		const { data } = await axios.post(url, {
			name,
			age,
			sex,
			owner: user._id,
		});

		return dispatch({
			type: CREATE_PET_SUCCESS,
			payload: {
				type: 'success',
				pet: data.pet,
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
