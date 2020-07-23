import React from 'react';
import _ from 'lodash';
import './index.scss';
import CardInfoPet from '../card-info-pet';

const PetInformation = (props) => {
	const { information, name } = props;

	return _.isEmpty(information) ? (
		<p>{_.upperFirst(name)} aún no tiene información.</p>
	) : (
		<section className='timeline'>
			{information.map((info) => (
				<CardInfoPet {...info} />
			))}
		</section>
	);
};

export default PetInformation;
