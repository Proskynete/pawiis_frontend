import { SHOW_MODAL, HIDE_MODAL } from '../config/constants';

const initialState = {
	show: false,
	pet_data: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SHOW_MODAL:
			return {
				...state,
				show: action.payload.show,
				pet_data: action.payload.pet_data,
			};
		case HIDE_MODAL:
			return {
				...state,
				show: action.payload.show,
			};
		default:
			return state;
	}
};
