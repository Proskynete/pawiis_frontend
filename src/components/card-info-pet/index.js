import React from 'react';
import {
	onlyDate,
	fromNow,
	prettyFormat,
} from '../../helpers/pretty-date.helper';
import { prettyType } from '../../helpers/pretty_type.helper';

const CardInfoPet = (props) => {
	const currentUser = JSON.parse(localStorage.getItem('user'));
	const { created_at, action_type, description } = props;

	const handleShowCrreateBy = () =>
		currentUser.role === 'pet_owner'
			? 'Creado por el(la) dueño(a)'
			: 'Creado por el veterinario';

	return (
		<article className='timeline__item'>
			<div className='timeline__item__header'>
				<p className='timeline__item__header__creator'>
					<i className='far fa-user' />
					{handleShowCrreateBy()}
				</p>

				<time
					dateTime={onlyDate(created_at)}
					className='timeline__item__header__create-at'
				>
					<i className='far fa-calendar-alt' />
					{prettyFormat(created_at)} <small>({fromNow(created_at)})</small>
				</time>
			</div>

			<p className='timeline__item__type'>{prettyType[action_type]}</p>
			<p className='timeline__item__description'>{description}</p>
		</article>
	);
};

export default CardInfoPet;
