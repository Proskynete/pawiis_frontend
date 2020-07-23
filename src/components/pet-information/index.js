import React from 'react';
import _ from 'lodash';

const PetInformation = (props) => {
	const { information, name } = props;

	return _.isEmpty(information) ? (
		<p>{_.upperFirst(name)} aún no tiene información.</p>
	) : (
		'Mucha información'
	);
};

export default PetInformation;
