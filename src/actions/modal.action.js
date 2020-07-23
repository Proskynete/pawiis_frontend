import { SHOW_MODAL } from '../config/constants';

export const showModalAction = (dispatch) => () => {
	return dispatch({
		type: SHOW_MODAL,
		payload: {
			show: true,
		},
	});
};
