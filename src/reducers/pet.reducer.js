import { CREATE_PET_SUCCESS, CREATE_PET_ERROR } from '../config/constants';

const initialState = {
	type: '',
	pet: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CREATE_PET_SUCCESS:
			return {
				...state,
				type: action.payload.type,
				pet: action.payload.pet,
			};
		case CREATE_PET_ERROR:
			return {
				...state,
				type: action.payload.type,
			};
		default:
			return state;
	}
};
