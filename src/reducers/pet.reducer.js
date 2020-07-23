import { CREATE_PET_SUCCESS, CREATE_PET_ERROR } from '../config/constants';

const initialState = {
	pet: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CREATE_PET_SUCCESS:
		case CREATE_PET_ERROR:
			return {
				...state,
				pet: action.payload.pet,
			};
		default:
			return state;
	}
};
