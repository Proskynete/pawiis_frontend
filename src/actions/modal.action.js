import { SHOW_MODAL, HIDE_MODAL } from '../config/constants';

export const showModalAction = (dispatch) => (data) => {
	return dispatch({
		type: SHOW_MODAL,
		payload: {
			show: true,
			pet_data: data,
		},
	});
};

export const hideModalAction = (dispatch) => () => {
	return dispatch({
		type: HIDE_MODAL,
		payload: {
			show: false,
		},
	});
};
