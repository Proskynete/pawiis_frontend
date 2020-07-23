import { SIGN_IN_SUCCESS, SIGN_IN_ERROR } from '../config/constants';

const initialState = {
	type: '',
	user: {},
	logged_in: false,
	error_message: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SIGN_IN_SUCCESS:
			return {
				...state,
				type: action.payload.type,
				user: action.payload.user,
				logged_in: action.payload.logged_in,
			};
		case SIGN_IN_ERROR:
			return {
				...state,
				type: action.payload.type,
				logged_in: action.payload.logged_in,
				user: {},
				error_message: action.payload.error_message,
			};
		default:
			return state;
	}
};
