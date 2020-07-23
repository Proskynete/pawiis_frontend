import React from 'react';
import _ from 'lodash';
import './index.scss';

const PetInformation = (props) => {
	const { information, name } = props;

	return _.isEmpty(information) ? (
		<p>{_.upperFirst(name)} aún no tiene información.</p>
	) : (
		<section className='timeline'>
			{information.map((info) => (
				<article key={info._id} className='timeline__item'>
					<header className='timeline__item__header'>
						<time
							dateTime={info.created_at}
							className='timeline__item__header__create-at'
						>
							{info.created_at}
						</time>
						<p className='timeline__item__header__creator'>{info.owner_id}</p>
					</header>
					<p className='timeline__item__type'>{info.action_type}</p>
					<p className='timeline__item__description'>{info.description}</p>
				</article>
			))}
		</section>
	);
};

export default PetInformation;
