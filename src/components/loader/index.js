import React from 'react';
import { Spinner } from 'react-bootstrap';

export const Loader = (props) => {
	const { text } = props;

	return (
		<>
			<Spinner
				as='span'
				animation='border'
				size='sm'
				role='status'
				aria-hidden='true'
			/>{' '}
			{text}
		</>
	);
};
