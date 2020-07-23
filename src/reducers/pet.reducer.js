import {
	GET_PET_SUCCESS,
	GET_PET_ERROR,
	CREATE_PET_SUCCESS,
	CREATE_PET_ERROR,
	CREATE_LOG_SUCCESS,
	GET_ALL_PET_SUCCESS,
	GET_ALL_PET_ERROR,
} from '../config/constants';

const initialState = {
	type: '',
	pet: {},
	all_pets: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CREATE_PET_SUCCESS:
		case GET_PET_SUCCESS:
		case CREATE_LOG_SUCCESS:
			return {
				...state,
				type: action.payload.type,
				pet: action.payload.pet,
			};
		case GET_ALL_PET_SUCCESS:
			return {
				...state,
				type: action.payload.type,
				all_pets: action.payload.all_pets,
			};
		case CREATE_PET_ERROR:
		case GET_PET_ERROR:
		case GET_ALL_PET_ERROR:
			return {
				...state,
				type: action.payload.type,
			};
		default:
			return state;
	}
};
