import axios from 'axios';
import {
	GET_PET_SUCCESS,
	GET_PET_ERROR,
	CREATE_PET_SUCCESS,
	CREATE_PET_ERROR,
} from '../config/constants';
import { getUrl } from '../config/config';

export const getPetAction = (dispatch) => async () => {
	const user = JSON.parse(localStorage.getItem('user'));
	const url = getUrl(`/pet?owner=${user._id}`);

	try {
		const { data } = await axios.get(url);

		return dispatch({
			type: GET_PET_SUCCESS,
			payload: {
				type: 'success',
				pet: data.pet,
			},
		});
	} catch (error) {
		return dispatch({
			type: GET_PET_ERROR,
			payload: {
				type: 'error',
			},
		});
	}
};

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
